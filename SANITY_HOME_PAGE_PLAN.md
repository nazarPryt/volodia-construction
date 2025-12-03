# Plan: Make Home Page Text Editable via Sanity CMS

## 🎯 Goal

Enable content management for the home page (`/`) through Sanity CMS, allowing non-technical users to edit all text content without touching code.

---

## 📊 Current State Analysis

### Home Page Location

- **File**: `src/app/page.tsx`
- **Route**: `/` (PATH.HOME)
- **Type**: Next.js 16 App Router page (Server Component)

### Content Currently Hardcoded

#### 1. Hero Section (`src/components/Hero.tsx`)

- Badge text: "Професійний ремонт"
- Main title: "Якісний ремонт квартир під ключ"
- Description: "Професійний досвід, індивідуальний підхід..."
- CTA buttons: "Замовити дзвінок" / "Дивитись роботи"
- Benefits stats (4 items):
  - "10+ Років досвіду"
  - "200+ Завершених проєктів"
  - "100% Задоволених клієнтів"
  - "24/7 Підтримка звязку"

#### 2. Services Section

- Section title: "Наші послуги"
- Section description
- 6 service cards with icon, title, description

#### 3. Portfolio Preview Section

- Section title: "Наші роботи"
- Section description
- CTA button text: "Дивитись всі роботи"

#### 4. Features Section ("Why Choose Us")

- Section title: "Чому обирають нас"
- 4 feature cards with icon, title, description

#### 5. CTA Section

- Title: "Готові почати ремонт?"
- Description
- Button texts: "📞 Зателефонувати зараз" / "Написати повідомлення"

---

## 🏗️ Architecture Design

### Sanity Schema Strategy

**Type**: Singleton Document (only one instance of home page content)

**Why Singleton?**

- Only one home page exists
- Prevents confusion with multiple home page documents
- Simpler content management experience

### Data Structure

```typescript
homePage (document - singleton)
├── hero (object)
│   ├── badge: string
│   ├── title: string
│   ├── highlightedText: string
│   ├── description: text
│   ├── ctaPrimaryText: string
│   └── ctaSecondaryText: string
│
├── benefits (array of objects)
│   ├── value: string
│   └── label: string
│
├── servicesSection (object)
│   ├── title: string
│   ├── description: text
│   └── buttonText: string
│
├── services (array of objects)
│   ├── icon: string (emoji)
│   ├── title: string
│   └── description: text
│
├── portfolioSection (object)
│   ├── title: string
│   ├── description: text
│   └── buttonText: string
│
├── featuresSection (object)
│   └── title: string
│
├── features (array of objects)
│   ├── icon: string (emoji)
│   ├── title: string
│   └── description: text
│
└── ctaSection (object)
    ├── title: string
    ├── description: text
    ├── primaryButtonText: string
    └── secondaryButtonText: string
```

---

## 📝 Implementation Steps

### Phase 1: Schema & Types Setup

#### Step 1: Create TypeScript Types

**File**: `src/sanity/types/homePage.ts` (new file)

Create TypeScript interfaces that match the Sanity schema structure:

- `HeroSection`
- `Benefit`
- `Service`
- `Feature`
- `Section` (reusable for title/description)
- `HomePageData` (main interface)

**Purpose**: Type safety throughout the application

---

#### Step 2: Create Sanity Schema

**File**: `src/sanity/schemaTypes/homePageSchema.ts` (new file)

Use Sanity's `defineType` and `defineField` to create schema:

- Set `name: 'homePage'`
- Set `type: 'document'`
- Configure as singleton using validation
- Define all fields matching the data structure
- Add helpful descriptions for content editors
- Set appropriate field validations

**Key Features**:

- Singleton pattern (only one document allowed)
- Rich text fields for longer descriptions
- Array fields for repeatable content (services, features, benefits)
- Clear field titles and descriptions for editors

---

#### Step 3: Register Schema

**File**: `src/sanity/schemaTypes/index.ts`

Import and add `homePageSchema` to the `types` array.

---

### Phase 2: Data Fetching

#### Step 4: Create GROQ Query

**File**: `src/sanity/lib/queries.ts` (new file or existing)

Create a GROQ query using `defineQuery`:

```groq
*[_type == "homePage"][0] {
  hero {
    badge,
    title,
    highlightedText,
    description,
    ctaPrimaryText,
    ctaSecondaryText
  },
  benefits,
  servicesSection,
  services,
  portfolioSection,
  featuresSection,
  features,
  ctaSection
}
```

**Purpose**:

- Fetch all home page content in one query
- Type-safe query using `defineQuery`
- Server-side data fetching

---

### Phase 3: Component Updates

#### Step 5: Update Hero Component

**File**: `src/components/Hero.tsx`

**Changes**:

1. Add props interface for Hero data
2. Replace hardcoded `benefits` array with props
3. Accept hero content (title, description, etc.) as props
4. Keep styling and structure intact

**Before**: Hardcoded content
**After**: Props-based component

---

#### Step 6: Update Home Page

**File**: `src/app/page.tsx`

**Changes**:

1. Make component `async` (Server Component)
2. Import Sanity client and query
3. Fetch home page data using `client.fetch()`
4. Pass data to Hero component
5. Update services, features sections to use Sanity data
6. Add fallback handling (use current hardcoded data if Sanity fetch fails)
7. Keep all styling and AOS animations

**Data Flow**:

```
Sanity CMS → GROQ Query → page.tsx (async fetch) → Components (props)
```

---

### Phase 4: Testing & Content Entry

#### Step 7: Test in Sanity Studio

**Steps**:

1. Run `pnpm dev`
2. Navigate to `http://localhost:3000/studio`
3. Verify "Home Page" document type appears
4. Create the singleton home page document
5. Fill in all fields with current content:
   - Copy text from current `page.tsx`
   - Copy text from current `Hero.tsx`
   - Add all services, features, benefits
6. Publish the document
7. Navigate to home page (`http://localhost:3000`)
8. Verify all content displays correctly
9. Test editing content in Studio and see changes on site

---

## 🔧 Technical Considerations

### Caching Strategy

- Use Next.js 16 automatic request memoization
- Server Components cache by default
- Consider adding revalidation if needed:
  ```typescript
  const homePageData = await client.fetch(
    HOME_PAGE_QUERY,
    {},
    { next: { revalidate: 60 } }, // revalidate every 60 seconds
  )
  ```

### Error Handling

- Graceful fallback to hardcoded content if Sanity unavailable
- Console errors for debugging
- Optional: Error boundary for production

### Type Safety

- Full TypeScript types from schema to components
- Use Sanity TypeGen for automated type generation (optional enhancement)

### Performance

- Server-side rendering (no client JavaScript for content)
- Single query fetches all home page data
- Optimized with Next.js caching

---

## 🎨 Content Editor Experience

### In Sanity Studio

**Document Structure**:

```
📄 Home Page (singleton)
  📁 Hero Section
    ✏️ Badge Text
    ✏️ Title
    ✏️ Highlighted Text
    ✏️ Description
    ✏️ Primary CTA Text
    ✏️ Secondary CTA Text

  📁 Benefits (Array)
    ➕ Add Benefit
      ✏️ Value (e.g., "10+")
      ✏️ Label (e.g., "Років досвіду")

  📁 Services Section
    ✏️ Section Title
    ✏️ Description
    ✏️ Button Text

  📁 Services (Array)
    ➕ Add Service
      ✏️ Icon (emoji)
      ✏️ Title
      ✏️ Description

  ... (and so on)
```

**Editor Benefits**:

- Clear field labels and descriptions
- Organized sections with collapsible fieldsets
- No technical knowledge required
- Real-time preview (if draft mode enabled)
- Publish/unpublish workflow

---

## 📦 Files to Create/Modify

### New Files

1. `src/sanity/types/homePage.ts` - TypeScript interfaces
2. `src/sanity/schemaTypes/homePageSchema.ts` - Sanity schema definition
3. `src/sanity/lib/queries.ts` (or add to existing) - GROQ queries

### Modified Files

1. `src/sanity/schemaTypes/index.ts` - Register schema
2. `src/components/Hero.tsx` - Accept props
3. `src/app/page.tsx` - Async fetch and data usage

---

## ✅ Success Criteria

- [ ] Sanity Studio shows "Home Page" document type
- [ ] All home page sections are editable in Studio
- [ ] Content changes in Studio reflect on home page
- [ ] No visual/styling regressions
- [ ] Type-safe implementation (no TypeScript errors)
- [ ] Graceful fallback if Sanity unavailable
- [ ] AOS animations still work
- [ ] All links and buttons function correctly
- [ ] Mobile responsive design maintained

---

## 🚀 Future Enhancements (Out of Scope)

1. **Images Support**
   - Add Sanity image fields
   - Portfolio gallery images from Sanity
   - Hero background images

2. **Draft Mode / Preview**
   - Enable Next.js draft mode
   - Live preview in Sanity Studio
   - Content preview before publishing

3. **Internationalization**
   - Multi-language content support
   - Localized strings in Sanity

4. **SEO Fields**
   - Meta title/description in Sanity
   - Dynamic Open Graph images

5. **Other Pages**
   - Apply same pattern to About, Services, Portfolio, Contact pages

---

## 📚 Resources

- [Sanity Schema Documentation](https://www.sanity.io/docs/schema-types)
- [next-sanity Documentation](https://github.com/sanity-io/next-sanity)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Next.js 16 Server Components](https://nextjs.org/docs)

---

## 💡 Notes

- Start with just the home page to validate the approach
- Once working, this pattern can be replicated for other pages
- Singleton pattern is appropriate for single-instance pages
- Consider creating reusable components for common patterns (e.g., section header)
