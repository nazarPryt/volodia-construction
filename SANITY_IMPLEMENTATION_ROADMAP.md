# Sanity CMS Implementation Roadmap

## 📋 Overview

This document provides a roadmap for implementing Sanity CMS across all pages of the Volodia renovation website. Each page has a detailed implementation plan.

---

## ✅ Completed

### Home Page

- **Status**: ✅ **IMPLEMENTED**
- **Plan**: `SANITY_HOME_PAGE_PLAN.md`
- **Testing Guide**: `SANITY_TESTING_GUIDE.md`
- **Complexity**: ⭐⭐⭐ (Medium)
- **Implementation Time**: ~3 hours (completed)

**What was done**:

- Created singleton `homePage` schema
- Hero section, services, features, benefits, CTA all editable
- Type-safe implementation with fallback data
- Server-side fetching with 60s revalidation

---

## 📝 Pending Implementation

### 1. About Page

- **Status**: 🔲 **PLANNED**
- **Plan**: `SANITY_ABOUT_PAGE_PLAN.md`
- **Complexity**: ⭐⭐ (Low-Medium)
- **Estimated Time**: 1-2 hours

**Content to manage**:

- Page header (title, description)
- Qualifications section (5 cards)
- Work principles section (5 items)
- CTA section

**Key Points**:

- Singleton schema
- Components already accept props (no updates needed)
- Straightforward implementation

---

### 2. Services Page

- **Status**: 🔲 **PLANNED**
- **Plan**: `SANITY_SERVICES_PAGE_PLAN.md`
- **Complexity**: ⭐⭐⭐ (Medium)
- **Estimated Time**: 2-3 hours

**Content to manage**:

- Page header
- 9 service cards (icon, title, description, details array, price)
- Price note section

**Key Points**:

- Singleton schema
- ServiceCard component may need updates for `details` and `price` props
- Nested arrays (details per service)

---

### 3. Portfolio Page

- **Status**: 🔲 **PLANNED**
- **Plan**: `SANITY_PORTFOLIO_PAGE_PLAN.md`
- **Complexity**: ⭐⭐⭐⭐ (High)
- **Estimated Time**: 4-6 hours

**Content to manage**:

- Page header
- Portfolio projects (repeatable document type)
- Portfolio categories (repeatable document type)
- CTA section

**Key Points**:

- **Three schemas**: portfolioPage (singleton), portfolioProject (repeatable), portfolioCategory (repeatable)
- Image handling with Sanity image builder
- References between documents
- Gallery arrays
- Most complex implementation

---

### 4. Contact Page

- **Status**: 🔲 **PLANNED**
- **Plan**: `SANITY_CONTACT_PAGE_PLAN.md`
- **Complexity**: ⭐⭐ (Low-Medium)
- **Estimated Time**: 1.5-2 hours

**Content to manage**:

- Page header
- Contact info display text (NOT actual contact data)
- Work schedule
- FAQ section (5+ items)
- Contact form section (title, description)

**Key Points**:

- Singleton schema
- Actual contact data stays in config files
- CMS manages display text only
- Simple, straightforward

---

## 🎯 Recommended Implementation Order

### Phase 1: Simple Pages (Week 1)

1. ✅ **Home Page** - Already done!
2. 🔲 **About Page** - Simplest, good next step
3. 🔲 **Contact Page** - Also simple, practice with FAQ arrays

### Phase 2: Medium Complexity (Week 2)

4. 🔲 **Services Page** - More complex with details arrays

### Phase 3: Advanced (Week 3)

5. 🔲 **Portfolio Page** - Most complex, do last

---

## 📊 Complexity Breakdown

| Page      | Complexity | Time   | New Schemas | Images | Notes         |
| --------- | ---------- | ------ | ----------- | ------ | ------------- |
| Home      | ⭐⭐⭐     | 3h     | 1 singleton | ❌     | ✅ Done       |
| About     | ⭐⭐       | 1-2h   | 1 singleton | ❌     | Easiest       |
| Contact   | ⭐⭐       | 1.5-2h | 1 singleton | ❌     | Simple        |
| Services  | ⭐⭐⭐     | 2-3h   | 1 singleton | ❌     | Nested arrays |
| Portfolio | ⭐⭐⭐⭐   | 4-6h   | 3 schemas   | ✅     | Most complex  |

**Total Estimated Time**: 10-16 hours for all 4 remaining pages

---

## 📦 Files Structure

After full implementation, you will have:

### Type Files

```
src/sanity/types/
├── homePage.ts          ✅ Done
├── aboutPage.ts         🔲 Pending
├── servicesPage.ts      🔲 Pending
├── portfolioPage.ts     🔲 Pending
├── portfolioProject.ts  🔲 Pending
└── contactPage.ts       🔲 Pending
```

### Schema Files

```
src/sanity/schemaTypes/
├── index.ts                      ✅ Updated (home)
├── homePageSchema.ts             ✅ Done
├── aboutPageSchema.ts            🔲 Pending
├── servicesPageSchema.ts         🔲 Pending
├── portfolioPageSchema.ts        🔲 Pending
├── portfolioProjectSchema.ts     🔲 Pending
├── portfolioCategorySchema.ts    🔲 Pending
└── contactPageSchema.ts          🔲 Pending
```

### Query Files

```
src/sanity/lib/
├── queries.ts  (all GROQ queries)
│   ├── HOME_PAGE_QUERY        ✅ Done
│   ├── ABOUT_PAGE_QUERY       🔲 Pending
│   ├── SERVICES_PAGE_QUERY    🔲 Pending
│   ├── PORTFOLIO_PAGE_QUERY   🔲 Pending
│   ├── PORTFOLIO_PROJECTS_QUERY  🔲 Pending
│   ├── PORTFOLIO_CATEGORIES_QUERY  🔲 Pending
│   └── CONTACT_PAGE_QUERY     🔲 Pending
├── client.ts   ✅ Exists
└── image.ts    ✅ Exists
```

### Page Files (Modified)

```
src/app/
├── page.tsx             ✅ Done (async, fetches Sanity)
├── about/page.tsx       🔲 Pending
├── services/page.tsx    🔲 Pending
├── portfolio/page.tsx   🔲 Pending
└── contact/page.tsx     🔲 Pending
```

### Component Files (May Need Updates)

```
src/components/
├── Hero.tsx              ✅ Updated (accepts props)
├── ServiceCard.tsx       🔲 May need updates (details, price)
├── PageHeader.tsx        ✅ Already prop-based
├── QualificationCard.tsx ✅ Already prop-based
├── PrincipleItem.tsx     ✅ Already prop-based
├── CategoryCard.tsx      ✅ Already prop-based
└── ContactForm.tsx       ✅ No changes needed
```

---

## 🎨 Sanity Studio Content Types

After full implementation, editors will see:

### Singleton Documents (Page Content)

1. ✅ Home Page
2. 🔲 About Page
3. 🔲 Services Page
4. 🔲 Portfolio Page
5. 🔲 Contact Page

### Repeatable Documents (Content Items)

6. 🔲 Portfolio Project (many instances)
7. 🔲 Portfolio Category (many instances)

**Total**: 5 singletons + 2 repeatable types = **7 document types**

---

## 💡 Best Practices Applied

### Across All Pages

- ✅ Singleton pattern for unique pages
- ✅ Type-safe TypeScript interfaces
- ✅ GROQ queries with `defineQuery`
- ✅ Fallback data for graceful degradation
- ✅ Server-side rendering (async components)
- ✅ 60-second revalidation
- ✅ Helpful field descriptions for editors

### Page-Specific Patterns

- **Home**: Multiple sections, benefits array
- **About**: Qualifications and principles arrays
- **Services**: Services with nested details arrays
- **Portfolio**: Separate document types, image handling, references
- **Contact**: Separation of CMS text from config data

---

## 🚀 Getting Started with Next Page

### To Implement About Page:

1. **Read the plan**: `SANITY_ABOUT_PAGE_PLAN.md`
2. **Follow the steps**:
   - Step 1: Create types file
   - Step 2: Create schema file
   - Step 3: Register schema
   - Step 4: Create GROQ query
   - Step 5: (Skip - components ready)
   - Step 6: Update page.tsx
   - Step 7: Test in Sanity Studio

3. **Reference**: Use `SANITY_HOME_PAGE_PLAN.md` for patterns

4. **Estimated time**: 1-2 hours

---

## 📚 Documentation Files

### Implementation Plans

- ✅ `SANITY_HOME_PAGE_PLAN.md` - Home page (reference)
- 📝 `SANITY_ABOUT_PAGE_PLAN.md` - About page
- 📝 `SANITY_SERVICES_PAGE_PLAN.md` - Services page
- 📝 `SANITY_PORTFOLIO_PAGE_PLAN.md` - Portfolio page
- 📝 `SANITY_CONTACT_PAGE_PLAN.md` - Contact page

### Testing & Guides

- ✅ `SANITY_TESTING_GUIDE.md` - How to test in Sanity Studio
- 📝 `SANITY_IMPLEMENTATION_ROADMAP.md` - This file

---

## ✅ Implementation Checklist

### For Each Page:

- [ ] Read implementation plan
- [ ] Create TypeScript types file
- [ ] Create Sanity schema file
- [ ] Register schema in index.ts
- [ ] Add GROQ query to queries.ts
- [ ] Update component props (if needed)
- [ ] Update page.tsx (async, fetch, fallback)
- [ ] Test in Sanity Studio
- [ ] Create content in Studio
- [ ] Verify on frontend
- [ ] Test editing content
- [ ] Check mobile responsiveness
- [ ] Verify AOS animations
- [ ] Check type safety (no TS errors)
- [ ] Test fallback (simulate Sanity unavailable)

---

## 🎯 Success Metrics

### Technical

- All pages fetch from Sanity CMS
- Type-safe implementation (0 TypeScript errors)
- Graceful fallback for all pages
- Server-side rendering maintained
- No performance regressions

### Content Management

- All text is editable in Sanity Studio
- Intuitive editor experience
- Clear field labels and descriptions
- Easy to add/remove/reorder content items
- Preview works in Studio (if enabled)

### User Experience

- No visual regressions
- All animations work
- Mobile responsive
- Fast page loads
- SEO maintained

---

## 🔮 Future Enhancements

After completing all 5 pages, consider:

1. **Draft Mode / Live Preview**
   - Real-time preview in Sanity Studio
   - Test changes before publishing

2. **Image Support**
   - Add images to services
   - Hero background images
   - About page bio photo

3. **Multi-language Support**
   - Ukrainian + English
   - Localized content in Sanity

4. **Advanced Portfolio**
   - Project detail pages
   - Category filtering
   - Before/after sliders

5. **Blog/News Section**
   - Add blog functionality
   - News/updates section
   - Article management

---

## 📞 Support

If you encounter issues during implementation:

1. **Check the plan** for that specific page
2. **Review** `SANITY_HOME_PAGE_PLAN.md` for working patterns
3. **Consult** `SANITY_TESTING_GUIDE.md` for testing help
4. **Verify** TypeScript types match schema
5. **Check** browser console for errors
6. **Review** Sanity Studio for validation errors

---

**Happy implementing! 🚀**

Start with the About page for an easy win, then build up to the more complex Portfolio page.
