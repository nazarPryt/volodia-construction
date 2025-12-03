# Sanity CMS Testing Guide - Home Page

## ✅ Implementation Complete!

All code changes have been implemented. Now it's time to test the Sanity CMS integration.

---

## 🚀 Step-by-Step Testing Instructions

### Step 1: Start the Development Server

```bash
pnpm dev
```

Wait for the server to start. You should see:

```
▲ Next.js 16.0.1
- Local:        http://localhost:3000
```

---

### Step 2: Access Sanity Studio

Open your browser and navigate to:

```
http://localhost:3000/studio
```

You should see the Sanity Studio interface.

**Note**: If you haven't configured Sanity environment variables yet, you may need to set them up first. Check `.env.local` for:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`

---

### Step 3: Find the Home Page Document

In Sanity Studio, you should see:

- **Left sidebar**: A "Home Page" document type (or similar)
- Click on it to create/edit the home page content

If you don't see it yet, the schema may need a moment to load, or you may need to refresh the Studio.

---

### Step 4: Create the Home Page Document

Click **"Create"** or **"+"** to create a new Home Page document.

You should see a form with these sections:

#### 📝 Hero Section

Fill in:

- **Badge Text**: `Професійний ремонт`
- **Main Title**: `Якісний ремонт квартир`
- **Highlighted Title Part**: `під ключ`
- **Description**: `Професійний досвід, індивідуальний підхід та гарантія якості. Перетворюємо ваші квартири на комфортні простори для життя.`
- **Primary Button Text**: `Замовити дзвінок`
- **Secondary Button Text**: `Дивитись роботи`

#### 📊 Benefits Statistics (Add 4 items)

Click **"Add item"** 4 times and fill in:

1. **Value**: `10+` | **Label**: `Років досвіду`
2. **Value**: `200+` | **Label**: `Завершених проєктів`
3. **Value**: `100%` | **Label**: `Задоволених клієнтів`
4. **Value**: `24/7` | **Label**: `Підтримка звязку`

#### 🛠️ Services Section

Fill in:

- **Section Title**: `Наші послуги`
- **Description**: `Виконуємо всі види ремонтних робіт з високою якістю та дотриманням термінів`
- **Button Text**: `Всі послуги та ціни`

#### 🏠 Services (Add 6 items)

Click **"Add item"** 6 times and fill in:

1. **Icon**: `🏠` | **Title**: `Ремонт під ключ` | **Description**: `Повний цикл робіт від демонтажу до фінішного оздоблення. Ідеально для нових квартир.`

2. **Icon**: `🎨` | **Title**: `Косметичний ремонт` | **Description**: `Швидке оновлення інтер'єру: фарбування, шпалери, підлоги та інші оздоблювальні роботи.`

3. **Icon**: `🔨` | **Title**: `Капітальний ремонт` | **Description**: `Повна реконструкція приміщення з заміною комунікацій та перепланування.`

4. **Icon**: `⚡` | **Title**: `Електрика` | **Description**: `Монтаж проводки, установка розеток, світильників та електричних щитів.`

5. **Icon**: `🚿` | **Title**: `Сантехніка` | **Description**: `Заміна труб, установка сантехнічного обладнання, підключення приладів.`

6. **Icon**: `◼️` | **Title**: `Плиткові роботи` | **Description**: `Укладання керамічної плитки, керамограніту, мозаїки в кухнях та ванних.`

#### 🖼️ Portfolio Section

Fill in:

- **Section Title**: `Наші роботи`
- **Description**: `Переглядайте приклади виконаних проєктів`
- **Button Text**: `Дивитись всі роботи`

#### ⭐ Features Section

Fill in:

- **Section Title**: `Чому обирають нас`

#### ✨ Features / Why Choose Us (Add 4 items)

Click **"Add item"** 4 times and fill in:

1. **Icon**: `✅` | **Title**: `Гарантія якості` | **Description**: `Надаємо гарантію на всі види робіт. Використовуємо тільки перевірені матеріали.`

2. **Icon**: `⏱️` | **Title**: `Дотримання термінів` | **Description**: `Складаємо чіткий графік робіт та строго його дотримуємось без затримок.`

3. **Icon**: `💰` | **Title**: `Прозора ціна` | **Description**: `Фіксована вартість після оцінки. Без прихованих платежів та доплат.`

4. **Icon**: `🤝` | **Title**: `Індивідуальний підхід` | **Description**: `Враховуємо всі побажання клієнта та пропонуємо оптимальні рішення.`

#### 📢 Call-to-Action Section

Fill in:

- **Section Title**: `Готові почати ремонт?`
- **Description**: `Зателефонуйте нам прямо зараз для безкоштовної консультації та оцінки вартості робіт`
- **Primary Button Text**: `📞 Зателефонувати зараз`
- **Secondary Button Text**: `Написати повідомлення`

---

### Step 5: Publish the Document

Click the **"Publish"** button in the top-right corner of Sanity Studio.

You should see a success message.

---

### Step 6: View the Home Page

Open a new tab and navigate to:

```
http://localhost:3000
```

You should see the home page with ALL the content you just entered in Sanity!

---

## ✅ Verification Checklist

Go through the home page and verify:

- [ ] **Hero Section**
  - [ ] Badge text displays correctly
  - [ ] Title displays correctly
  - [ ] Highlighted text (gradient) displays correctly
  - [ ] Description displays correctly
  - [ ] Both CTA buttons have correct text
  - [ ] All 4 benefit stats display correctly

- [ ] **Services Section**
  - [ ] Section title displays correctly
  - [ ] Section description displays correctly
  - [ ] All 6 service cards display with icons, titles, and descriptions
  - [ ] "View all" button text is correct

- [ ] **Portfolio Section**
  - [ ] Section title displays correctly
  - [ ] Section description displays correctly
  - [ ] Button text is correct

- [ ] **Features Section**
  - [ ] Section title displays correctly
  - [ ] All 4 feature cards display with icons, titles, and descriptions

- [ ] **CTA Section**
  - [ ] Title displays correctly
  - [ ] Description displays correctly
  - [ ] Both button texts are correct

- [ ] **Styling & Animations**
  - [ ] All sections look visually correct
  - [ ] AOS animations still work
  - [ ] Dark/light theme toggle works
  - [ ] Responsive design works on mobile

---

## 🧪 Test Content Editing

Now test that content changes work:

1. Go back to Sanity Studio (`http://localhost:3000/studio`)
2. Open the Home Page document
3. Change the main title to something else (e.g., "ТЕСТОВИЙ ЗАГОЛОВОК")
4. Click **"Publish"**
5. Refresh the home page (`http://localhost:3000`)
6. **Wait up to 60 seconds** (due to revalidation cache)
7. The new title should appear!

**If it doesn't update immediately**: This is normal due to Next.js caching (60-second revalidation). Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R) or wait a minute.

---

## 🐛 Troubleshooting

### Issue: "Home Page" doesn't appear in Sanity Studio

**Solution**:

1. Check that the dev server is running
2. Refresh Sanity Studio (hard refresh: Ctrl+Shift+R)
3. Check browser console for errors
4. Verify `src/sanity/schemaTypes/index.ts` has `homePageSchema` imported

### Issue: Home page shows fallback data instead of Sanity data

**Possible causes**:

1. **No document published yet**: Create and publish the Home Page document in Sanity Studio
2. **Sanity credentials missing**: Check `.env.local` for correct Sanity project ID and dataset
3. **Network error**: Check browser console and terminal for error messages

**To debug**:

- Open browser DevTools Console
- Look for error message: "Error fetching home page data from Sanity"
- Check terminal for backend errors

### Issue: TypeScript errors

**Solution**:

```bash
# Stop the dev server (Ctrl+C)
# Restart it
pnpm dev
```

### Issue: Changes in Sanity don't reflect on the site

**Solution**:

- Wait 60 seconds (revalidation period)
- Hard refresh the browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check that you clicked "Publish" in Sanity (not just "Save")

---

## 🎉 Success Criteria

The implementation is successful if:

✅ You can create/edit the Home Page document in Sanity Studio
✅ All fields are easy to understand and edit
✅ Content changes in Sanity appear on the home page
✅ The page looks identical to before (no visual regressions)
✅ All animations and interactions still work
✅ Mobile responsive design is maintained

---

## 📝 Next Steps

Once testing is complete and everything works:

1. **Commit the changes**:

   ```bash
   git add .
   git commit -m "feat: integrate Sanity CMS for home page content"
   ```

2. **Apply to other pages**: Use the same pattern for About, Services, Portfolio, and Contact pages

3. **Add images**: Extend schemas to include Sanity image fields

4. **Enable Draft Mode**: Set up Next.js draft mode for live preview

---

## 🆘 Need Help?

If you encounter issues:

1. Check the browser console for errors
2. Check the terminal for backend errors
3. Review `SANITY_HOME_PAGE_PLAN.md` for architecture details
4. Verify all files were created correctly

---

**Happy Testing! 🚀**
