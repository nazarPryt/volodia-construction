# Plan: Make Contact Page Text Editable via Sanity CMS

## 🎯 Goal

Enable content management for the Contact page (`/contact`) through Sanity CMS, allowing easy editing of page text, contact information display, work schedule, and FAQ content.

---

## 📊 Current State Analysis

### Contact Page Location

- **File**: `src/app/contact/page.tsx`
- **Route**: `/contact` (PATH.CONTACT)
- **Type**: Next.js 16 App Router page (Server Component)

### Content Currently Hardcoded

#### 1. Page Header

- **Title**: "Контакти"
- **Description**: "Зв'яжіться з нами зручним для вас способом. Ми завжди на зв'язку та готові відповісти на всі питання."

#### 2. Contact Information Section

- **Section Title**: "Як з нами зв'язатися"
- **4 contact blocks**:
  1. **Phone**
     - Icon: 📞
     - Title: "Телефон"
     - Note: "Дзвоніть щодня з 8:00 до 20:00"
  2. **Messengers**
     - Icon: 💬
     - Title: "Месенджери"
     - Links to: Telegram, Viber, WhatsApp
  3. **Email**
     - Icon: ✉️
     - Title: "Email"
     - Note: "Відповідаємо протягом 24 годин"
  4. **Location**
     - Icon: 📍
     - Title: "Робочий регіон"
     - Text: "м. Тернопіль та Тернопільська область"
     - Note: "Безкоштовний виїзд для оцінки вартості робіт"

**Note**: Actual phone/email/social links come from `CONTACT_INFO` config (not hardcoded in page)

#### 3. Work Schedule Box

- **Title**: "Графік роботи"
- **3 schedule items**:
  - Понеділок - П'ятниця: 8:00 - 20:00
  - Субота: 9:00 - 18:00
  - Неділя: За домовленістю
- **Note**: "📱 У невідкладних випадках дзвоніть у будь-який час"

#### 4. Contact Form Section

- **Title**: "Напишіть нам"
- **Description**: "Заповніть форму, і ми зв'яжемося з вами протягом години у робочий час"
- **Form**: ContactForm component (functional, not text-based)

#### 5. FAQ Section

- **Section Title**: "Часті питання"
- **5 FAQ items**, each with:
  - Question
  - Answer

**FAQ Items**:

1. Як швидко ви зможете почати роботу?
2. Чи безкоштовний виїзд на об'єкт?
3. Як відбувається оплата?
4. Надаєте гарантію?
5. Чи можете допомогти з вибором матеріалів?

---

## 🏗️ Architecture Design

### Sanity Schema Strategy

**Type**: Singleton Document (only one Contact page)

**Important Note**:

- **Actual contact details** (phone, email, social media) should remain in config files
- CMS manages **display text, descriptions, notes** - NOT the actual contact data
- This prevents breaking contact functionality if CMS data is missing

### Data Structure

```typescript
contactPage (document - singleton)
├── pageHeader (object)
│   ├── title: string
│   └── description: text
│
├── contactInfoSection (object)
│   ├── title: string
│   └── blocks: array of objects
│       ├── icon: string (emoji)
│       ├── title: string
│       ├── note: text (optional)
│       └── type: string (phone|messengers|email|location)
│
├── workSchedule (object)
│   ├── title: string
│   ├── schedule: array of objects
│   │   ├── days: string
│   │   └── hours: string
│   └── emergencyNote: text
│
├── contactFormSection (object)
│   ├── title: string
│   └── description: text
│
└── faqSection (object)
    ├── title: string
    └── items: array of objects
        ├── question: string
        └── answer: text
```

---

## 📝 Implementation Steps Overview

### Phase 1: Schema & Types Setup

#### Step 1: Create TypeScript Types

**File**: `src/sanity/types/contactPage.ts` (new file)

Create interfaces:

- `PageHeader`
- `ContactBlock`
- `ScheduleItem`
- `WorkSchedule`
- `ContactFormSection`
- `FAQItem`
- `FAQSection`
- `ContactPageData` (main interface)

---

#### Step 2: Create Sanity Schema

**File**: `src/sanity/schemaTypes/contactPageSchema.ts` (new file)

Define schema with:

- Singleton pattern
- Page header
- Contact info blocks (with type field for identification)
- Work schedule (title, items array, note)
- Contact form section (title, description)
- FAQ section (title, items array)

**Contact Block Types**:

```typescript
type: 'string',
options: {
  list: [
    { title: 'Phone', value: 'phone' },
    { title: 'Messengers', value: 'messengers' },
    { title: 'Email', value: 'email' },
    { title: 'Location', value: 'location' }
  ]
}
```

**Validations**:

- Contact blocks: exactly 4 (one of each type)
- Schedule items: minimum 3, maximum 7
- FAQ items: minimum 3, maximum 10

---

#### Step 3: Register Schema

**File**: `src/sanity/schemaTypes/index.ts`

Import and add `contactPageSchema` to the `types` array.

---

### Phase 2: Data Fetching

#### Step 4: Create GROQ Query

**File**: `src/sanity/lib/queries.ts` (add to existing)

Create query:

```groq
*[_type == "contactPage"][0] {
  pageHeader {
    title,
    description
  },
  contactInfoSection {
    title,
    blocks[] {
      icon,
      title,
      note,
      type
    }
  },
  workSchedule {
    title,
    schedule[] {
      days,
      hours
    },
    emergencyNote
  },
  contactFormSection {
    title,
    description
  },
  faqSection {
    title,
    items[] {
      question,
      answer
    }
  }
}
```

---

### Phase 3: Component Updates

#### Step 5: Update Components

**ContactForm Component** (`src/components/ContactForm.tsx`):

- **No changes needed** - functional form, not text-based

**Page Components**:

- All contact display is inline in page.tsx
- No separate components to update

---

#### Step 6: Update Contact Page

**File**: `src/app/contact/page.tsx`

**Changes**:

1. Make component `async`
2. Import Sanity client, query, and types
3. Import `CONTACT_INFO` from config (for actual contact data)
4. Fetch contact page data
5. Create fallback data with current content
6. Merge CMS text with config contact data
7. Update all sections with dynamic content

**Important Pattern**:

```typescript
// Actual contact data from config
import { CONTACT_INFO } from '@/config/contacts'

// Display text from CMS
const phoneBlock = data.contactInfoSection.blocks.find(b => b.type === 'phone')

// Combine in render
<a href={`tel:${CONTACT_INFO.PHONE.NUMBER}`}>
  {CONTACT_INFO.PHONE.DISPLAY}
</a>
<p>{phoneBlock?.note}</p>
```

---

### Phase 4: Testing

#### Step 7: Test in Sanity Studio

1. Create Contact Page document
2. Fill in all sections
3. Add all contact blocks with correct types
4. Add work schedule items
5. Add 5 FAQ items
6. Publish document
7. Verify rendering on `/contact`
8. Verify actual contact links still work (phone, email, messengers)
9. Test form functionality

---

## 🎨 Content Editor Experience

### In Sanity Studio

**Document Structure**:

```
📄 Contact Page (singleton)
  📁 Page Header
    ✏️ Title
    ✏️ Description

  📁 Contact Information Section
    ✏️ Section Title
    📋 Contact Blocks (Array - exactly 4)
      ➕ Add Contact Block
        🔽 Type (dropdown: phone, messengers, email, location)
        ✏️ Icon (emoji)
        ✏️ Title
        ✏️ Note (optional)

  📁 Work Schedule
    ✏️ Section Title
    📋 Schedule Items (Array)
      ➕ Add Schedule Item
        ✏️ Days (e.g., "Понеділок - П'ятниця")
        ✏️ Hours (e.g., "8:00 - 20:00")
    ✏️ Emergency Note

  📁 Contact Form Section
    ✏️ Title
    ✏️ Description

  📁 FAQ Section
    ✏️ Section Title
    📋 FAQ Items (Array)
      ➕ Add FAQ Item
        ✏️ Question
        ✏️ Answer
```

**Preview**:

- Contact blocks: Show type and title
- Schedule: Show days and hours
- FAQ: Show question

---

## 📦 Files to Create/Modify

### New Files

1. `src/sanity/types/contactPage.ts` - TypeScript interfaces
2. `src/sanity/schemaTypes/contactPageSchema.ts` - Sanity schema

### Modified Files

1. `src/sanity/schemaTypes/index.ts` - Register schema
2. `src/sanity/lib/queries.ts` - Add GROQ query
3. `src/app/contact/page.tsx` - Async fetch and data usage

### No Changes Needed

- `src/components/ContactForm.tsx` - Form functionality unchanged
- `src/config/contacts.ts` - Actual contact data stays here

---

## ✅ Success Criteria

- [ ] Sanity Studio shows "Contact Page" document type
- [ ] All text sections are editable
- [ ] Work schedule is editable
- [ ] FAQ items can be added/removed/edited
- [ ] **Actual contact links still work** (phone, email, messengers)
- [ ] Contact form still functions properly
- [ ] Content changes reflect on contact page
- [ ] No visual regressions
- [ ] Type-safe implementation
- [ ] Graceful fallback if Sanity unavailable
- [ ] AOS animations still work

---

## 💡 Key Implementation Notes

### Separation of Concerns

**CMS manages**: Display text, descriptions, notes, instructions
**Config manages**: Actual phone numbers, emails, social media usernames

**Why?**

- Prevents breaking contact functionality
- Config is version controlled
- CMS content can fail without breaking site
- Clear separation of data vs. presentation

### Contact Block Types

- Use `type` field to identify which contact method
- Allows flexible ordering in CMS
- Find blocks by type when rendering
- Validation ensures all 4 types exist

### Work Schedule Flexibility

- Array allows any number of schedule items
- Can handle different schedules per season
- Easy to update hours

### FAQ Management

- Easy to add/remove questions
- Expandable for future (could add accordion IDs)
- Good for SEO (structured FAQ data)

### Emergency Note

- Special note about calling anytime
- Shown in work schedule box
- Editable text for flexibility

---

## 🚀 Future Enhancements (Out of Scope)

1. **Map Integration**
   - Google Maps embed
   - Show service area visually
   - Office location pin (if applicable)

2. **FAQ Accordion**
   - Collapsible FAQ items
   - Expand/collapse functionality
   - Smooth animations

3. **Contact Form Customization**
   - Editable form fields in CMS
   - Custom field labels
   - Required field configuration
   - Success/error messages in CMS

4. **Service Hours Calendar**
   - Calendar view of availability
   - Booking integration
   - Holidays/vacation display

5. **Multiple Locations**
   - Support for multiple offices/service areas
   - Location-specific contact info
   - Service area map

6. **Live Chat Integration**
   - Chat widget
   - Chatbot for common questions
   - Office hours integration

7. **Social Proof**
   - Display response time stats
   - Customer satisfaction rating
   - Number of completed projects

---

## 📚 Resources

- Home Page (reference): `SANITY_HOME_PAGE_PLAN.md`
- Config files: `src/config/contacts.ts`
- Form component: `src/components/ContactForm.tsx`

---

## 🎯 Complexity Assessment

**Complexity**: ⭐⭐ (Low-Medium)

**Why it's simpler**:

- Mostly text content
- No image handling
- No complex relationships
- Form stays functional (not CMS-managed)
- Config handles actual contact data

**Potential Challenges**:

- Properly merging CMS text with config data
- Contact block type matching
- Ensuring contact links don't break

**Estimated Implementation Time**: 1.5-2 hours

---

## 🔍 Pre-Implementation Checklist

Before starting:

1. **Review** `CONTACT_INFO` structure in config
2. **Understand** separation between display text and actual data
3. **Test** contact form to ensure it works
4. **Plan** how to find contact blocks by type

---

## ⚠️ Important Notes

### Never Store in CMS

- ❌ Actual phone numbers
- ❌ Email addresses
- ❌ Social media usernames
- ❌ URLs

### Store in CMS

- ✅ Section titles
- ✅ Descriptions
- ✅ Notes and instructions
- ✅ Work schedule display
- ✅ FAQ content

### Why?

If CMS fails or content is deleted:

- Contact links will still work (from config)
- Form will still function
- Page won't break
- Only display text will use fallback

---

## 🧪 Testing Checklist

After implementation, verify:

- [ ] Phone link works: `tel:${CONTACT_INFO.PHONE.NUMBER}`
- [ ] Email link works: `mailto:${CONTACT_INFO.EMAIL}`
- [ ] Telegram link works
- [ ] Viber link works
- [ ] WhatsApp link works
- [ ] Contact form submits correctly
- [ ] All text can be edited in Sanity
- [ ] FAQ items can be reordered
- [ ] Work schedule displays correctly

---

**Ready for implementation!** This page is straightforward - focus on properly separating CMS text from config data.
