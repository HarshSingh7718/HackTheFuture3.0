# ✅ AWS Amplify Deployment Checklist

## Pre-Deployment Tasks

### 🔴 CRITICAL (Must Complete Before Launch)

- [ ] **Optimize Images**
  - [ ] Convert mascot PNGs to WebP (use [Squoosh.app](https://squoosh.app/))
  - [ ] Target: Reduce total size from 21 MB to 3-4 MB
  - [ ] Test that images still look good after compression
  - [ ] Verify all image paths still work after replacement
  - **Time:** 30-45 minutes
  - **Impact:** 80% performance improvement

- [ ] **Update Registration URL**
  - [ ] Open `src/data/event.ts`
  - [ ] Replace `registrationUrl: '#register'` with actual URL
  - [ ] Test that the button links work
  - **Time:** 2 minutes

- [ ] **Test Local Build**
  - [ ] Run `npm run build`
  - [ ] Run `npm run preview`
  - [ ] Test all navigation links
  - [ ] Test on mobile viewport (DevTools)
  - **Time:** 5 minutes

### 🟡 IMPORTANT (Should Complete Soon)

- [ ] **Update Social Media Links**
  - [ ] Edit `src/App.tsx` footer section
  - [ ] Edit `src/components/Footer.tsx`
  - [ ] Replace `href="#"` with real social media URLs
  - **Time:** 5 minutes

- [ ] **Add Lazy Loading to Images**
  - [ ] Add `loading="lazy"` to all images except hero
  - [ ] Files to update: `App.tsx`, `About.tsx`, etc.
  - **Time:** 10 minutes

- [ ] **Verify All Content**
  - [ ] Check that all text is accurate
  - [ ] Verify date: September 25-26, 2026
  - [ ] Verify location: Tula's University, Dehradun
  - [ ] Verify prize pool: ₹5,00,000+
  - **Time:** 10 minutes

### 🟢 OPTIONAL (Nice to Have)

- [ ] Add favicon.ico to public/ folder
- [ ] Add Open Graph meta tags for social sharing
- [ ] Add Google Analytics tracking code
- [ ] Create robots.txt file
- [ ] Add custom 404 page

---

## Git Repository Setup

- [ ] **Initialize Git** (if not already done)
  ```bash
  git init
  ```

- [ ] **Create .gitignore** (if not present)
  ```
  node_modules/
  dist/
  .DS_Store
  *.log
  .env
  .env.local
  ```

- [ ] **Commit All Changes**
  ```bash
  git add .
  git commit -m "Ready for AWS Amplify deployment"
  ```

- [ ] **Create Remote Repository**
  - [ ] GitHub, GitLab, Bitbucket, or AWS CodeCommit
  - [ ] Make repository private or public (your choice)

- [ ] **Push Code**
  ```bash
  git remote add origin <your-repo-url>
  git branch -M main
  git push -u origin main
  ```

---

## AWS Amplify Setup

### Step 1: Access AWS Console
- [ ] Log in to [AWS Console](https://console.aws.amazon.com/)
- [ ] Navigate to AWS Amplify service
- [ ] Click "Host web app"

### Step 2: Connect Repository
- [ ] Select Git provider (GitHub/GitLab/Bitbucket/CodeCommit)
- [ ] Authorize AWS Amplify access
- [ ] Select repository: `HackTheFuture3.0`
- [ ] Select branch: `main`

### Step 3: Configure Build Settings
- [ ] Verify `amplify.yml` is detected automatically
- [ ] Confirm build command: `npm run build`
- [ ] Confirm output directory: `dist`
- [ ] Select Node.js version: 18.x or 20.x (default is fine)

### Step 4: Deploy
- [ ] Review all settings
- [ ] Click "Save and Deploy"
- [ ] Wait for build to complete (3-5 minutes)
- [ ] Note down the Amplify URL: `https://main.xxxxx.amplifyapp.com`

---

## Post-Deployment Testing

### Basic Functionality Tests
- [ ] **Homepage loads**
  - [ ] Hero section displays correctly
  - [ ] Countdown timer is working
  - [ ] Mascot image loads
  - [ ] Stats section displays
  - [ ] All sections visible

- [ ] **Navigation works**
  - [ ] Click "About" → loads About page
  - [ ] Click "Problems" → loads Problems page
  - [ ] Click "Tracks" → loads Tracks page
  - [ ] Click "Prizes" → loads Prizes page
  - [ ] Click "Timeline" → loads Timeline page
  - [ ] Click "Rules" → loads Rules page
  - [ ] Click "FAQ" → loads FAQ page
  - [ ] Click "Contact" → loads Contact page

- [ ] **Direct URL navigation works**
  - [ ] Visit `yoursite.com/about` directly
  - [ ] Visit `yoursite.com/prizes` directly
  - [ ] Visit `yoursite.com/tracks` directly
  - [ ] All should load (not 404)

- [ ] **Images load correctly**
  - [ ] Logo displays
  - [ ] Mascot displays on all pages
  - [ ] All section images load
  - [ ] No broken image icons

- [ ] **Links work**
  - [ ] Register button leads to correct URL
  - [ ] Footer links work
  - [ ] Social media links work
  - [ ] Internal navigation works

### Mobile Testing
- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] Test on tablet
- [ ] Verify responsive design
- [ ] Check that text is readable
- [ ] Verify buttons are tappable

### Performance Testing
- [ ] **Run Lighthouse Audit** (Chrome DevTools)
  - [ ] Performance: Target 90+
  - [ ] Accessibility: Target 90+
  - [ ] Best Practices: Target 90+
  - [ ] SEO: Target 90+

- [ ] **Check Load Time**
  - [ ] Open DevTools Network tab
  - [ ] Disable cache
  - [ ] Reload page
  - [ ] Verify load time < 5 seconds (on fast connection)

- [ ] **Test on Slow Connection**
  - [ ] Chrome DevTools → Network → Throttle to "Slow 3G"
  - [ ] Reload page
  - [ ] Verify acceptable experience

### Browser Compatibility
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

---

## Optional Enhancements

### Custom Domain Setup
- [ ] Purchase domain (if not owned)
- [ ] Go to Amplify Console → Domain Management
- [ ] Click "Add domain"
- [ ] Enter domain name
- [ ] Follow DNS verification steps
- [ ] Wait for SSL certificate provisioning (automatic)
- [ ] Test custom domain

### Branch Previews
- [ ] Enable branch previews in Amplify settings
- [ ] Create `develop` branch for testing
- [ ] Push to `develop` branch
- [ ] Verify preview URL is generated
- [ ] Use for testing before deploying to main

### Monitoring & Analytics
- [ ] Enable AWS CloudWatch monitoring
- [ ] Set up alerts for errors
- [ ] Add Google Analytics
- [ ] Monitor page views and user behavior

### SEO Optimization
- [ ] Add Open Graph meta tags
  ```html
  <meta property="og:title" content="Hack the Future 3.0" />
  <meta property="og:description" content="36-hour hackathon at Tula's University" />
  <meta property="og:image" content="<URL to share image>" />
  ```
- [ ] Add Twitter Card meta tags
- [ ] Submit sitemap to Google Search Console
- [ ] Verify mobile-friendliness

---

## Continuous Deployment

### Auto-Deploy Configuration
- [ ] Verify auto-deploy is enabled for `main` branch
- [ ] Test: Make a small change
- [ ] Push to `main`
- [ ] Verify Amplify auto-rebuilds
- [ ] Check that changes appear live

### Build Notifications
- [ ] Set up email notifications for build failures
- [ ] Add Slack webhook (optional)
- [ ] Monitor build history in Amplify Console

---

## Content Updates Before Event

### When Judges are Confirmed
- [ ] Update `src/pages/EventPage.tsx`
- [ ] Replace "REVEALING SOON" with actual profiles
- [ ] Add photos, names, titles, organizations
- [ ] Test that layout looks good

### When Sponsors are Confirmed
- [ ] Add sponsor logos to `public/` folder
- [ ] Update sponsor section in relevant components
- [ ] Ensure logos are optimized (< 100 KB each)
- [ ] Test on various screen sizes

### When Problem Statements are Ready
- [ ] Update `src/pages/Problems.tsx`
- [ ] Add actual problem data
- [ ] Test problem detail pages
- [ ] Verify all links work

### Contact Information
- [ ] Update faculty coordinator details
- [ ] Update student coordinator details
- [ ] Add email addresses
- [ ] Add phone numbers
- [ ] Test contact form (if functional)

---

## Launch Day Checklist

### 24 Hours Before
- [ ] Final content review
- [ ] Test all links one more time
- [ ] Verify registration link works
- [ ] Check countdown timer accuracy
- [ ] Test on multiple devices

### Launch Day
- [ ] Share URL on social media
- [ ] Add URL to event materials
- [ ] Monitor for errors in Amplify Console
- [ ] Check analytics for traffic
- [ ] Be ready to fix any issues quickly

### Post-Launch Monitoring (First Week)
- [ ] Check analytics daily
- [ ] Monitor error logs
- [ ] Respond to user feedback
- [ ] Fix any reported issues
- [ ] Update content as needed

---

## Troubleshooting

### If Build Fails
1. Check build logs in Amplify Console
2. Look for error messages
3. Verify package.json scripts are correct
4. Check that all dependencies are listed
5. Try building locally: `npm run build`
6. Fix errors and push again

### If Routes Don't Work
1. Verify `public/_redirects` file exists
2. Check file contains: `/*    /index.html   200`
3. Rebuild and redeploy
4. Clear browser cache

### If Images Don't Load
1. Check image paths in code
2. Verify images are in correct directories
3. Check browser console for 404 errors
4. Verify image files were committed to Git
5. Check build logs for image processing errors

### If Site is Slow
1. Check image sizes (should be < 500 KB each)
2. Run Lighthouse audit
3. Optimize images if needed
4. Add lazy loading to images
5. Consider using a CDN

---

## Success Metrics

### Technical Success
- ✅ Build completes in < 2 minutes
- ✅ Lighthouse Performance score > 90
- ✅ All routes return 200 status
- ✅ No console errors
- ✅ Load time < 5 seconds (fast connection)
- ✅ Load time < 10 seconds (3G connection)

### User Experience Success
- ✅ Site loads quickly
- ✅ Navigation is intuitive
- ✅ All information is accessible
- ✅ Works on mobile devices
- ✅ No broken links
- ✅ Registration process is smooth

### Business Success
- ✅ Registration link works
- ✅ Event information is clear
- ✅ Site looks professional
- ✅ Reflects brand identity
- ✅ Drives registrations

---

## Estimated Time Investment

| Task | Time Required |
|------|---------------|
| Image optimization | 30-45 min |
| Content updates | 15-20 min |
| Git setup & push | 10 min |
| AWS Amplify setup | 10-15 min |
| Post-deployment testing | 30-45 min |
| Optional enhancements | 1-2 hours |
| **Total (core tasks)** | **1.5-2 hours** |
| **Total (with optional)** | **3-4 hours** |

---

## Final Sign-Off

Before marking this project as "complete," ensure:

- [ ] All CRITICAL tasks are done
- [ ] Site is deployed and accessible
- [ ] All major functionality tested
- [ ] Performance is acceptable
- [ ] Content is accurate
- [ ] Registration process works
- [ ] Site has been shown to stakeholders
- [ ] Backup plan exists for issues

**Deployment Date:** _______________  
**Deployed By:** _______________  
**Amplify URL:** _______________  
**Custom Domain (if applicable):** _______________  

---

## 🎉 Congratulations!

Once you've completed this checklist, your Hack the Future 3.0 website will be live and ready to accept registrations!

**Next Steps After Launch:**
1. Monitor traffic and errors
2. Update content as needed
3. Gather user feedback
4. Make improvements iteratively

**Good luck with your hackathon! 🚀**
