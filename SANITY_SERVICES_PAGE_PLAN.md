# Plan: Make Services Page Text Editable via Sanity CMS

## 🎯 Goal

Enable content management for the Services page (`/services`) through Sanity CMS, allowing easy editing of all service listings, details, pricing, and page content.

---

## 📊 Current State Analysis

### Services Page Location

- **File**: `src/app/services/page.tsx`
- **Route**: `/services` (PATH.SERVICES)
- **Type**: Next.js 16 App Router page (Server Component)

### Content Currently Hardcoded

#### 1. Page Header

- **Title**: "Наші послуги"
- **Description**: "Виконуємо повний спектр ремонтних робіт для квартир будь-якої складності. Гарантуємо якість, дотримання термінів та прозорість цін."

#### 2. Services Section

- **9 service cards**, each with:
  - Icon (emoji)
  - Title
  - Description (main service description)
  - Details (array of 5-6 items - what's included)
  - Price (text - "від X грн/м²" or "від X грн/шт")

**Current Services**:

1. Ремонт під ключ (🏠)
2. Косметичний ремонт (🎨)
3. Капітальний ремонт (🔨)
4. Електромонтажні роботи (⚡)
5. Сантехнічні роботи (🚿)
6. Плиткові роботи (◼️)
7. Столярні роботи (🚪)
8. Оздоблювальні роботи (🎯)
9. Установка вікон (🪟)

#### 3. Price Note Section

- **Title**: "Індивідуальний розрахунок вартості"
- **Description**: Long text about pricing being approximate...
- **Primary Button**: "Замовити розрахунок"
- **Secondary Button**: "Написати нам"

---

## 🏗️ Architecture Design

### Sanity Schema Strategy

**Type**: Singleton Document (only one Services page)

### Data Structure

```typescript
servicesPage (document - singleton)
├── pageHeader (object)
│   ├── title: string
│   └── description: text
│
├── services (array of objects)
│   ├── icon: string (emoji)
│   ├── title: string
│   ├── description: text
│   ├── details: array of strings
│   └── price: string
│
└── priceNoteSection (object)
    ├── title: string
    ├── description: text
    ├── primaryButtonText: string
    └── secondaryButtonText: string
```

---

## 📝 Implementation Steps Overview

### Phase 1: Schema & Types Setup

#### Step 1: Create TypeScript Types

**File**: `src/sanity/types/servicesPage.ts` (new file)

Create interfaces:

- `PageHeader`
- `Service` (with icon, title, description, details array, price)
- `PriceNoteSection`
- `ServicesPageData` (main interface)

---

#### Step 2: Create Sanity Schema

**File**: `src/sanity/schemaTypes/servicesPageSchema.ts` (new file)

Define schema with:

- Singleton pattern
- Page header fields
- Services array (with nested fields for each service)
- Price note section

**Service Object Structure**:

```typescript
{
  type: 'object',
  fields: [
    icon (string),
    title (string),
    description (text),
    details (array of strings),
    price (string)
  ]
}
```

**Validations**:

- Services array: minimum 1, recommended 6-12
- Details array: minimum 3, maximum 10 per service
- Price: required

---

#### Step 3: Register Schema

**File**: `src/sanity/schemaTypes/index.ts`

Import and add `servicesPageSchema` to the `types` array.

---

### Phase 2: Data Fetching

#### Step 4: Create GROQ Query

**File**: `src/sanity/lib/queries.ts` (add to existing)

Create query:

```groq
*[_type == "servicesPage"][0] {
  pageHeader {
    title,
    description
  },
  services[] {
    icon,
    title,
    description,
    details,
    price
  },
  priceNoteSection {
    title,
    description,
    primaryButtonText,
    secondaryButtonText
  }
}
```

---

### Phase 3: Component Updates

#### Step 5: Update Components

**ServiceCard Component** (`src/components/ServiceCard.tsx`):

Current props:

- `icon`, `title`, `description`, `link`, `delay`

**New props needed**:

- `details` (array of strings)
- `price` (string)

**Changes Required**:

1. Add `details` and `price` to props interface
2. Render details list (if provided)
3. Display price (if provided)
4. Make `link` prop optional (not needed for services page)

**Note**: Check if ServiceCard already has these props or needs updating.

---

#### Step 6: Update Services Page

**File**: `src/app/services/page.tsx`

**Changes**:

1. Make component `async`
2. Import Sanity client, query, and types
3. Fetch services page data
4. Create fallback data with all current content
5. Pass data to PageHeader
6. Map services array to ServiceCard components
7. Update price note section with dynamic content

**Service Mapping**:

```typescript
{data.services.map((service, index) => (
  <ServiceCard
    key={index}
    icon={service.icon}
    title={service.title}
    description={service.description}
    details={service.details}
    price={service.price}
    delay={index * 100}
  />
))}
```

---

### Phase 4: Testing

#### Step 7: Test in Sanity Studio

1. Create Services Page document
2. Add all 9 current services
3. Fill in all service details
4. Publish document
5. Verify rendering on `/services`
6. Test adding/removing services
7. Test editing service details

---

## 🎨 Content Editor Experience

### In Sanity Studio

**Document Structure**:

```
📄 Services Page (singleton)
  📁 Page Header
    ✏️ Title
    ✏️ Description

  📁 Services (Array)
    ➕ Add Service
      ✏️ Icon (emoji)
      ✏️ Service Title
      ✏️ Description
      📋 Details (Array of text items)
        ➕ Add Detail
          ✏️ Detail text
      ✏️ Price

  📁 Price Note Section
    ✏️ Section Title
    ✏️ Description
    ✏️ Primary Button Text
    ✏️ Secondary Button Text
```

**Service Preview** (in Studio):

- Title: Service icon + name
- Subtitle: Price
- Helps identify services quickly

---

## 📦 Files to Create/Modify

### New Files

1. `src/sanity/types/servicesPage.ts` - TypeScript interfaces
2. `src/sanity/schemaTypes/servicesPageSchema.ts` - Sanity schema

### Modified Files

1. `src/sanity/schemaTypes/index.ts` - Register schema
2. `src/sanity/lib/queries.ts` - Add GROQ query
3. `src/app/services/page.tsx` - Async fetch and data usage
4. `src/components/ServiceCard.tsx` - **May need updates** to display `details` and `price` if not already present

### Check First

- **ServiceCard component**: Verify if it already displays `details` and `price` props
- If yes: No changes needed
- If no: Add rendering logic for these fields

---

## ✅ Success Criteria

- [ ] Sanity Studio shows "Services Page" document type
- [ ] All 9 services are editable
- [ ] Each service shows icon, title, description, details list, and price
- [ ] Can add/remove services dynamically
- [ ] Services display in correct grid layout (2 columns on large screens)
- [ ] Price note section is editable
- [ ] Content changes reflect on services page
- [ ] No visual regressions
- [ ] Type-safe implementation
- [ ] Graceful fallback if Sanity unavailable
- [ ] AOS animations still work

---

## 💡 Key Implementation Notes

### Service Details Array

- Each service has 5-6 detail items
- Render as a bullet list in the ServiceCard
- Use validation to ensure minimum 3, maximum 10 details

### Price Formatting

- Store as plain text (e.g., "від 5000 грн/м²")
- Allows flexibility for different pricing models:
  - Per square meter (м²)
  - Per piece (шт)
  - Per point (точка)
  - Custom text

### Service Order

- Array order in Sanity determines display order
- Allow drag-and-drop reordering in Studio
- Use Sanity's built-in array ordering

### Grid Layout

- Currently displays in 2-column grid on large screens
- Responsive: 1 column on mobile, 2 on tablets/desktop
- Ensure works with any number of services (not just 9)

---

## 🚀 Future Enhancements (Out of Scope)

1. **Service Categories**
   - Group services by category
   - Filterable service list
   - Category navigation

2. **Image Gallery per Service**
   - Add Sanity image array to each service
   - Before/after photos
   - Lightbox gallery

3. **Service Detail Pages**
   - Individual page per service (e.g., `/services/remont-pid-kluch`)
   - More detailed information
   - Related portfolio projects
   - Testimonials per service

4. **Price Calculator**
   - Interactive price calculator
   - Based on square meters, complexity, etc.
   - Dynamic price estimation

5. **Service Booking**
   - Online booking form per service
   - Calendar integration
   - Appointment scheduling

6. **SEO per Service**
   - Individual meta titles/descriptions per service
   - Structured data for services
   - Rich snippets in search results

---

## 📚 Resources

- Home Page implementation (reference): `SANITY_HOME_PAGE_PLAN.md`
- About Page implementation (reference): `SANITY_ABOUT_PAGE_PLAN.md`
- ServiceCard component: `src/components/ServiceCard.tsx`

---

## 🎯 Complexity Assessment

**Complexity**: ⭐⭐⭐ (Medium)

**Why it's medium complexity**:

- Multiple services with nested details arrays
- ServiceCard component may need updates
- More fields per service than other pages
- Need to handle variable number of services

**Potential Challenges**:

- ServiceCard component might not display `details` and `price` yet
- Details array needs proper formatting/rendering
- Ensuring responsive grid works with any number of services

**Estimated Implementation Time**: 2-3 hours

---

## 🔍 Pre-Implementation Checklist

Before starting, check:

1. **ServiceCard component** - Does it already support `details` and `price` props?
2. **Current rendering** - How are details currently displayed?
3. **Styling** - Is there existing CSS for service details lists?

---

**Ready for implementation!** Follow the steps above to enable Sanity CMS for the Services page.
