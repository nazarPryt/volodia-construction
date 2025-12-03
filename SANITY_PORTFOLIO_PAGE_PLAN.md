# Plan: Make Portfolio Page Text Editable via Sanity CMS

## 🎯 Goal

Enable content management for the Portfolio page (`/portfolio`) through Sanity CMS, with support for managing individual portfolio projects and categories.

---

## 📊 Current State Analysis

### Portfolio Page Location

- **File**: `src/app/portfolio/page.tsx`
- **Route**: `/portfolio` (PATH.PORTFOLIO)
- **Type**: Next.js 16 App Router page (Server Component)

### Content Currently Hardcoded

#### 1. Page Header

- **Title**: "Портфоліо"
- **Description**: "Переглядайте приклади наших робіт. Кожен проєкт виконаний з максимальною увагою до деталей."

#### 2. Portfolio Gallery

- **Currently**: Empty array, showing 6 placeholder items
- **Interface defined** but unused:
  ```typescript
  interface PortfolioItem {
    id: string
    title: string
    category: string
    imageUrl: string
    description?: string
  }
  ```
- **Placeholder display**: Shows "📸 Проєкт 1-6" with "Фото незабаром"

#### 3. Categories Section

- **Section Title**: "Категорії робіт"
- **3 category cards**:
  - Ремонт під ключ (🏠)
  - Ванні кімнати (🛁)
  - Кухні (🍳)
- Each category has:
  - ID (slug)
  - Icon
  - Title
  - Description

#### 4. CTA Section

- **Title**: "Хочете побачити більше прикладів?"
- **Description**: "Зателефонуйте нам, і ми надішлемо додаткові фото та відео наших робіт"
- **Primary Button**: "📞 Зателефонувати"
- **Secondary Button**: "Написати повідомлення"

---

## 🏗️ Architecture Design

### Sanity Schema Strategy

**Type**: Mixed - Singleton + Repeatable Documents

**Why this approach?**

- **portfolioPage** (singleton): Page header, CTA text, and page-level content
- **portfolioProject** (document): Individual portfolio projects (repeatable, many instances)
- **portfolioCategory** (document): Categories for filtering projects (repeatable)

**Benefits**:

- Scalable: Easy to add/remove projects
- Flexible: Each project is independent
- Filterable: Can filter by category
- Reusable: Projects can be referenced elsewhere
- Rich content: Each project can have multiple images, detailed description

---

## 🗂️ Data Structure

### Schema 1: portfolioPage (Singleton)

```typescript
portfolioPage (document - singleton)
├── pageHeader (object)
│   ├── title: string
│   └── description: text
│
├── ctaSection (object)
│   ├── title: string
│   ├── description: text
│   ├── primaryButtonText: string
│   └── secondaryButtonText: string
│
└── categoriesSection (object)
    └── title: string
```

### Schema 2: portfolioProject (Repeatable Document)

```typescript
portfolioProject (document - repeatable)
├── title: string
├── slug: slug (auto-generated from title)
├── category: reference (to portfolioCategory)
├── featuredImage: image (main project image)
├── gallery: array of images (multiple project photos)
├── description: text (optional - project details)
├── completionDate: date (optional)
├── location: string (optional - e.g., "Тернопіль, вул. Шевченка")
├── area: string (optional - e.g., "65 м²")
├── duration: string (optional - e.g., "2 місяці")
├── featured: boolean (show on homepage/featured section)
└── order: number (for manual ordering)
```

### Schema 3: portfolioCategory (Repeatable Document)

```typescript
portfolioCategory (document - repeatable)
├── title: string
├── slug: slug
├── icon: string (emoji)
├── description: text
└── order: number (for manual ordering)
```

---

## 📝 Implementation Steps Overview

### Phase 1: Schema & Types Setup

#### Step 1: Create TypeScript Types

**File**: `src/sanity/types/portfolioPage.ts` (new file)

Create interfaces:

- `PageHeader`
- `CTASection`
- `CategoriesSection`
- `PortfolioPageData`

**File**: `src/sanity/types/portfolioProject.ts` (new file)

Create interfaces:

- `PortfolioProject`
- `PortfolioCategory`

Include Sanity image reference types.

---

#### Step 2: Create Sanity Schemas

**File**: `src/sanity/schemaTypes/portfolioPageSchema.ts` (new file)

- Singleton for page content
- Page header, CTA section, categories section title

**File**: `src/sanity/schemaTypes/portfolioProjectSchema.ts` (new file)

- Repeatable document for projects
- All project fields
- Image fields with hotspot/crop support
- Reference to category

**File**: `src/sanity/schemaTypes/portfolioCategorySchema.ts` (new file)

- Repeatable document for categories
- Category details

**Important**: Use Sanity's image type for proper image handling:

```typescript
defineField({
  name: 'featuredImage',
  title: 'Featured Image',
  type: 'image',
  options: {
    hotspot: true, // Enables image cropping
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
    },
  ],
})
```

---

#### Step 3: Register Schemas

**File**: `src/sanity/schemaTypes/index.ts`

Import and add all three schemas:

- `portfolioPageSchema`
- `portfolioProjectSchema`
- `portfolioCategorySchema`

---

### Phase 2: Data Fetching

#### Step 4: Create GROQ Queries

**File**: `src/sanity/lib/queries.ts` (add to existing)

**Query 1: Page Content**

```groq
*[_type == "portfolioPage"][0] {
  pageHeader,
  ctaSection,
  categoriesSection
}
```

**Query 2: All Projects (with category details)**

```groq
*[_type == "portfolioProject"] | order(order asc, _createdAt desc) {
  _id,
  title,
  slug,
  category->{
    title,
    slug,
    icon
  },
  featuredImage {
    asset->,
    alt
  },
  description,
  completionDate,
  location,
  area,
  duration,
  featured
}
```

**Query 3: All Categories**

```groq
*[_type == "portfolioCategory"] | order(order asc) {
  _id,
  title,
  slug,
  icon,
  description,
  order
}
```

**Query 4: Featured Projects (optional)**

```groq
*[_type == "portfolioProject" && featured == true] | order(order asc) [0...6] {
  _id,
  title,
  featuredImage,
  category->title
}
```

---

### Phase 3: Image Handling

#### Step 5: Set Up Image URL Builder

Sanity images need special handling. Use `@sanity/image-url`:

**Already exists**: `src/sanity/lib/image.ts`

Usage in component:

```typescript
import { urlFor } from '@/sanity/lib/image'

const imageUrl = urlFor(project.featuredImage).width(800).height(600).url()
```

---

### Phase 4: Component Updates

#### Step 6: Update Components

**CategoryCard Component** (`src/components/CategoryCard.tsx`):

- Check if it already accepts all needed props
- Should have: `icon`, `title`, `description`
- Likely already prop-based, verify

**Page Component**:

- Create fallback data structure
- Fetch all three data sources (page, projects, categories)
- Map categories to CategoryCard
- Map projects to portfolio items
- Handle image URLs with Sanity image builder

---

#### Step 7: Update Portfolio Page

**File**: `src/app/portfolio/page.tsx`

**Major Changes**:

1. Make component `async`
2. Fetch portfolio page data, projects, and categories
3. Create fallback data
4. Use `urlFor()` to generate image URLs
5. Map projects with proper image handling
6. Handle empty state (no projects)
7. Render categories from CMS

**Image Handling Example**:

```typescript
{projects.map(project => (
  <div key={project._id}>
    <Image
      src={urlFor(project.featuredImage).width(800).height(600).url()}
      alt={project.featuredImage.alt || project.title}
      width={800}
      height={600}
    />
    <h3>{project.title}</h3>
    <p>{project.category.title}</p>
  </div>
))}
```

---

### Phase 5: Testing

#### Step 8: Test in Sanity Studio

1. Create Portfolio Categories (3 categories)
2. Create Portfolio Page document
3. Create 3-6 Portfolio Projects with images
4. Link projects to categories
5. Publish all documents
6. Verify rendering on `/portfolio`
7. Test image display and responsiveness
8. Test category filtering (if implemented)

---

## 🎨 Content Editor Experience

### In Sanity Studio

**Three Document Types**:

#### 1. Portfolio Page (Singleton)

```
📄 Portfolio Page
  📁 Page Header
    ✏️ Title
    ✏️ Description

  📁 Categories Section
    ✏️ Section Title

  📁 Call-to-Action Section
    ✏️ Title
    ✏️ Description
    ✏️ Primary Button Text
    ✏️ Secondary Button Text
```

#### 2. Portfolio Projects (Multiple)

```
📄 Portfolio Project
  ✏️ Title
  ✏️ Slug (auto-generated)
  🔗 Category (reference)
  🖼️ Featured Image
  🖼️ Gallery (multiple images)
  ✏️ Description
  📅 Completion Date
  ✏️ Location
  ✏️ Area (m²)
  ✏️ Duration
  ☑️ Featured (checkbox)
  🔢 Order (number)
```

#### 3. Portfolio Categories (Multiple)

```
📄 Portfolio Category
  ✏️ Title
  ✏️ Slug
  ✏️ Icon (emoji)
  ✏️ Description
  🔢 Order
```

**Workflow**:

1. Create categories first
2. Create projects and link to categories
3. Upload project images
4. Set featured projects
5. Adjust display order

---

## 📦 Files to Create/Modify

### New Files

1. `src/sanity/types/portfolioPage.ts` - Page types
2. `src/sanity/types/portfolioProject.ts` - Project & category types
3. `src/sanity/schemaTypes/portfolioPageSchema.ts` - Page schema
4. `src/sanity/schemaTypes/portfolioProjectSchema.ts` - Project schema
5. `src/sanity/schemaTypes/portfolioCategorySchema.ts` - Category schema

### Modified Files

1. `src/sanity/schemaTypes/index.ts` - Register all schemas
2. `src/sanity/lib/queries.ts` - Add GROQ queries
3. `src/app/portfolio/page.tsx` - Async fetch, image handling, data usage

### Existing (Verify)

- `src/sanity/lib/image.ts` - Should already exist for image URLs
- `src/components/CategoryCard.tsx` - Verify props

---

## ✅ Success Criteria

- [ ] Sanity Studio shows all three document types
- [ ] Can create/edit portfolio projects
- [ ] Can upload and manage project images
- [ ] Can create and manage categories
- [ ] Projects link to categories correctly
- [ ] Images display correctly on portfolio page
- [ ] Image hotspot/cropping works
- [ ] Can add/remove projects dynamically
- [ ] Featured projects toggle works
- [ ] Manual ordering works for projects and categories
- [ ] Empty state handled gracefully
- [ ] No visual regressions
- [ ] Responsive image sizing
- [ ] Type-safe implementation
- [ ] Graceful fallback if Sanity unavailable

---

## 💡 Key Implementation Notes

### Image Handling

- Always use `urlFor()` from `@sanity/image-url`
- Specify width/height for optimization
- Use `hotspot: true` for smart cropping
- Include `alt` text field for accessibility
- Next.js Image component for optimization

### Project Ordering

- Use `order` field for manual sorting
- Fallback to `_createdAt desc` (newest first)
- Allow drag-and-drop in Studio

### Categories

- Use reference field to link projects to categories
- Can filter projects by category (future enhancement)
- Categories are reusable across projects

### Gallery vs Featured Image

- **Featured Image**: Main project photo (required)
- **Gallery**: Additional photos (optional, array)
- Featured image used in grid/list views
- Gallery for project detail pages (future)

### Performance

- Load images at appropriate sizes
- Use Next.js Image optimization
- Lazy load images below fold
- Consider pagination for many projects

---

## 🚀 Future Enhancements (Out of Scope)

1. **Project Detail Pages**
   - `/portfolio/[slug]` dynamic routes
   - Full gallery lightbox
   - Complete project information
   - Related projects

2. **Category Filtering**
   - Filter projects by category
   - URL query params (e.g., `?category=bathrooms`)
   - "All" / category tabs

3. **Search Functionality**
   - Search projects by title, description
   - Filter by date range
   - Filter by location

4. **Before/After Slider**
   - Dedicated before/after image pairs
   - Interactive slider component
   - Comparison view

5. **Video Support**
   - Add video URLs to projects
   - YouTube/Vimeo embeds
   - Video galleries

6. **Client Testimonials per Project**
   - Link testimonials to projects
   - Display client reviews
   - Star ratings

7. **Project Tags**
   - Additional tagging system
   - Multiple tags per project
   - Tag-based filtering

---

## 📚 Resources

- Sanity Images Guide: https://www.sanity.io/docs/image-type
- Image URL Builder: https://www.sanity.io/docs/image-url
- References: https://www.sanity.io/docs/reference-type
- Home Page (reference): `SANITY_HOME_PAGE_PLAN.md`

---

## 🎯 Complexity Assessment

**Complexity**: ⭐⭐⭐⭐ (High)

**Why it's complex**:

- Multiple related schemas (page, projects, categories)
- Image handling with Sanity image builder
- References between documents
- Gallery arrays
- More GROQ queries needed
- Image optimization required

**Challenges**:

- Proper image URL generation
- Handling missing images gracefully
- Category references
- Empty state handling
- Performance with many images

**Estimated Implementation Time**: 4-6 hours

---

## 🔍 Pre-Implementation Checklist

Before starting:

1. **Verify** `src/sanity/lib/image.ts` exists and exports `urlFor`
2. **Check** CategoryCard component props
3. **Review** Sanity image documentation
4. **Understand** Next.js Image component requirements
5. **Plan** image upload workflow for testing

---

## ⚠️ Important Notes

### Image Requirements

- Projects MUST have at least one image (featuredImage)
- Always provide alt text for accessibility
- Test with different image sizes/aspect ratios
- Use appropriate image formats (WebP, JPEG)

### Data Relationships

- Projects reference categories (one-to-one)
- Categories can have many projects (one-to-many)
- Handle missing category gracefully

### Empty States

- No projects: Show message + CTA to call/contact
- No categories: Hide categories section
- Missing images: Show placeholder

---

**Ready for implementation!** This is the most complex page. Take time to understand Sanity image handling before starting.
