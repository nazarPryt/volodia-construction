# Plan: Make About Page Text Editable via Sanity CMS

## 🎯 Goal

Enable content management for the About page (`/about`) through Sanity CMS, allowing easy editing of all text content including qualifications, work principles, and CTA sections.

---

## 📊 Current State Analysis

### About Page Location

- **File**: `src/app/about/page.tsx`
- **Route**: `/about` (PATH.ABOUT)
- **Type**: Next.js 16 App Router page (Server Component)

### Content Currently Hardcoded

#### 1. Page Header

- **Title**: "Про нас"
- **Description**: "Професійний досвід, відповідальний підхід та любов до своєї справи"

#### 2. Stats Section (Commented Out)

- Currently disabled in code (within comments)
- 4 statistics (same as home page benefits)
- Can be re-enabled if needed

#### 3. Qualifications Section

- **Section Title**: "Кваліфікація та навички"
- **5 qualification cards**, each with:
  - Icon (emoji)
  - Title
  - Description
- Examples:
  - Спеціалізація, Сертифікати, Інструменти, Консультації, Гарантія

#### 4. Work Principles Section

- **Section Title**: "Мої принципи роботи"
- **5 principle items**, each with:
  - Number (auto-generated 1-5)
  - Title
  - Description
- Examples:
  - Чесність та прозорість, Якість понад усе, Пунктуальність, etc.

#### 5. CTA Section

- **Title**: "Готові почати співпрацю?"
- **Description**: "Зателефонуйте мені, щоб обговорити ваш проєкт..."
- **Primary Button**: "📞 Зателефонувати"
- **Secondary Button**: "Переглянути роботи"

#### 6. Commented-Out Bio Section

- Contains master's bio (Володимир Іваненко)
- Photo placeholder
- 3 paragraphs of biography text
- 4 stats display
- **Note**: Currently disabled but can be re-enabled

---

## 🏗️ Architecture Design

### Sanity Schema Strategy

**Type**: Singleton Document (only one About page)

### Data Structure

```typescript
aboutPage (document - singleton)
├── pageHeader (object)
│   ├── title: string
│   └── description: text
│
├── qualificationsSection (object)
│   └── title: string
│
├── qualifications (array of objects)
│   ├── icon: string (emoji)
│   ├── title: string
│   └── description: text
│
├── principlesSection (object)
│   └── title: string
│
├── principles (array of objects)
│   ├── title: string
│   └── description: text
│   // Note: number is auto-generated (index + 1)
│
└── ctaSection (object)
    ├── title: string
    ├── description: text
    ├── primaryButtonText: string
    └── secondaryButtonText: string

// OPTIONAL (if bio section is enabled):
├── bioSection (object)
│   ├── name: string
│   ├── photo: image (Sanity image type)
│   ├── paragraphs: array of text blocks
│   └── enabled: boolean
│
├── stats (array of objects)
│   ├── value: string
│   └── label: string
```

---

## 📝 Implementation Steps Overview

### Phase 1: Schema & Types Setup

#### Step 1: Create TypeScript Types

**File**: `src/sanity/types/aboutPage.ts` (new file)

Create interfaces:

- `PageHeader`
- `SectionTitle` (reusable)
- `Qualification`
- `Principle`
- `CTASection`
- `AboutPageData` (main interface)

Optional if bio section enabled:

- `BioSection`
- `Stat`

---

#### Step 2: Create Sanity Schema

**File**: `src/sanity/schemaTypes/aboutPageSchema.ts` (new file)

Define schema with:

- Singleton pattern (`__experimental_singleton: true`)
- All fields matching data structure
- Helpful descriptions for content editors
- Validations (required fields, min/max items)

**Key Fields**:

- Page header (title, description)
- Qualifications section (title + array of qualifications)
- Principles section (title + array of principles)
- CTA section (title, description, button texts)

**Optional**:

- Bio section (name, photo, paragraphs, stats)
- Toggle to enable/disable bio section

---

#### Step 3: Register Schema

**File**: `src/sanity/schemaTypes/index.ts`

Import and add `aboutPageSchema` to the `types` array.

---

### Phase 2: Data Fetching

#### Step 4: Create GROQ Query

**File**: `src/sanity/lib/queries.ts` (add to existing)

Create query:

```groq
*[_type == "aboutPage"][0] {
  pageHeader,
  qualificationsSection,
  qualifications,
  principlesSection,
  principles,
  ctaSection
}
```

---

### Phase 3: Component Updates

#### Step 5: Update Components

**Components to modify**:

1. **PageHeader component** (`src/components/PageHeader.tsx`)
   - Already accepts `title` and `description` props
   - **No changes needed** (already prop-based)

2. **QualificationCard component** (`src/components/QualificationCard.tsx`)
   - Already accepts `icon`, `title`, `description` props
   - **No changes needed** (already prop-based)

3. **PrincipleItem component** (`src/components/PrincipleItem.tsx`)
   - Already accepts `number`, `title`, `description` props
   - **No changes needed** (already prop-based)

---

#### Step 6: Update About Page

**File**: `src/app/about/page.tsx`

**Changes**:

1. Make component `async`
2. Import Sanity client, query, and types
3. Fetch about page data
4. Create fallback data object with current content
5. Pass data to PageHeader component (already accepts props)
6. Map qualifications array to QualificationCard components
7. Map principles array to PrincipleItem components
8. Update CTA section with dynamic content

**Data Flow**:

```
Sanity CMS → GROQ Query → aboutPage (async fetch) → Components (props)
```

---

### Phase 4: Testing

#### Step 7: Test in Sanity Studio

1. Create About Page document in Studio
2. Fill in all fields with current content
3. Publish document
4. Verify rendering on `/about` page
5. Test editing content

---

## 🎨 Content Editor Experience

### In Sanity Studio

**Document Structure**:

```
📄 About Page (singleton)
  📁 Page Header
    ✏️ Title
    ✏️ Description

  📁 Qualifications Section
    ✏️ Section Title

  📁 Qualifications (Array)
    ➕ Add Qualification
      ✏️ Icon (emoji)
      ✏️ Title
      ✏️ Description

  📁 Work Principles Section
    ✏️ Section Title

  📁 Work Principles (Array)
    ➕ Add Principle
      ✏️ Title
      ✏️ Description

  📁 Call-to-Action Section
    ✏️ Title
    ✏️ Description
    ✏️ Primary Button Text
    ✏️ Secondary Button Text
```

---

## 📦 Files to Create/Modify

### New Files

1. `src/sanity/types/aboutPage.ts` - TypeScript interfaces
2. `src/sanity/schemaTypes/aboutPageSchema.ts` - Sanity schema

### Modified Files

1. `src/sanity/schemaTypes/index.ts` - Register schema
2. `src/sanity/lib/queries.ts` - Add GROQ query
3. `src/app/about/page.tsx` - Async fetch and data usage

### No Changes Needed

- `src/components/PageHeader.tsx` - Already prop-based
- `src/components/QualificationCard.tsx` - Already prop-based
- `src/components/PrincipleItem.tsx` - Already prop-based

---

## ✅ Success Criteria

- [ ] Sanity Studio shows "About Page" document type
- [ ] All sections are editable in Studio
- [ ] Content changes reflect on about page
- [ ] No visual/styling regressions
- [ ] Type-safe implementation
- [ ] Graceful fallback if Sanity unavailable
- [ ] AOS animations still work
- [ ] Mobile responsive design maintained
- [ ] Principle numbers auto-generate correctly (1-5)

---

## 💡 Key Implementation Notes

### Principle Numbering

- Numbers (1-5) should be auto-generated from array index
- In the page component: `{principles.map((principle, index) => <PrincipleItem number={index + 1} ... />)}`
- Don't store number in Sanity - derive from position

### Qualifications Validation

- Recommend 4-6 qualification cards for good visual balance
- Use validation: `Rule.min(3).max(8)`

### Principles Validation

- Recommend exactly 5 principles (current design)
- Use validation: `Rule.min(3).max(7)`

### Bio Section (Optional)

If enabling the commented-out bio section:

- Add Sanity image field for photo
- Use array of text blocks for paragraphs
- Include enabled/disabled toggle
- Conditionally render based on toggle

---

## 🚀 Future Enhancements (Out of Scope)

1. **Bio Section with Image**
   - Enable commented-out section
   - Add Sanity image field
   - Image cropping/hotspot support

2. **Certifications/Awards**
   - Add array of certification documents
   - Include images of certificates
   - Display in dedicated section

3. **Testimonials**
   - Client testimonials section
   - Star ratings
   - Client photos (optional)

4. **Timeline**
   - Career timeline visualization
   - Key milestones
   - Before/after project highlights

---

## 📚 Resources

- Home Page implementation (reference): `SANITY_HOME_PAGE_PLAN.md`
- Component props are already set up correctly
- Use same patterns as home page (singleton, fallback, async fetch)

---

## 🎯 Complexity Assessment

**Complexity**: ⭐⭐ (Low-Medium)

**Why it's simpler than Home page**:

- Fewer sections to manage
- Most components already accept props
- No need to update Hero or other custom components
- Straightforward content structure

**Estimated Implementation Time**: 1-2 hours

---

**Ready for implementation!** Follow the steps above to enable Sanity CMS for the About page.
