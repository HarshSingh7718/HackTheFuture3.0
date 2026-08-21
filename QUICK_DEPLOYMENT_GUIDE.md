# 🚀 Quick Deployment Guide - AWS Amplify

## Prerequisites
- AWS Account (free tier eligible)
- Git repository (GitHub, GitLab, Bitbucket, or AWS CodeCommit)
- This project code pushed to the repository

---

## ⚡ 5-Minute Deployment

### Step 1: Push Your Code
```bash
git add .
git commit -m "Ready for AWS Amplify deployment"
git push origin main
```

### Step 2: AWS Amplify Setup
1. Go to [AWS Console](https://console.aws.amazon.com/amplify/)
2. Click **"Host web app"**
3. Choose your Git provider
4. Authorize AWS Amplify access
5. Select repository: **HackTheFuture3.0**
6. Select branch: **main**

### Step 3: Build Settings (Auto-detected)
AWS will find your `amplify.yml` file automatically. Verify:
- ✅ Build command: `npm run build`
- ✅ Output directory: `dist`
- ✅ Node version: 18.x or 20.x (default)

### Step 4: Deploy
1. Click **"Save and Deploy"**
2. Wait 3-5 minutes
3. Your site will be live at: `https://main.xxxxx.amplifyapp.com`

---

## 🎨 Post-Deployment

### Add Custom Domain (Optional)
1. Go to Amplify Console → Domain Management
2. Click "Add domain"
3. Follow DNS verification steps
4. SSL certificate auto-provisioned

### Update Content
Edit these files before launching:
- `src/data/event.ts` → Add real registration URL
- Social media links in Footer.tsx
- Contact information when available

---

## 📊 Monitor Your Site

### Amplify Console Dashboard
- **Build history:** See all deployments
- **Monitoring:** Page views, requests, errors
- **Logs:** Build and server logs

### Auto-Deploy
Every push to `main` branch triggers automatic rebuild and deployment.

---

## 🐛 Common Issues

### Build Fails
- Check build logs in Amplify Console
- Verify `package.json` scripts are correct
- Ensure all dependencies are listed

### Routes Not Working
- Verify `public/_redirects` file exists
- Check file contains: `/*    /index.html   200`

### Images Not Loading
- Check image paths are relative
- Verify images are in correct directories
- Check browser console for 404 errors

---

## 💡 Pro Tips

1. **Branch Previews:** Enable preview deployments for feature branches
2. **Environment Variables:** Add them in Amplify Console if needed
3. **Performance:** Use Lighthouse to audit your deployed site
4. **Monitoring:** Enable AWS CloudWatch for detailed analytics

---

## 📞 Quick Links

- [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
- [Documentation](https://docs.aws.amazon.com/amplify/)
- [Pricing Calculator](https://aws.amazon.com/amplify/pricing/)

---

## ✅ Deployment Checklist

- [ ] Code pushed to Git
- [ ] Repository connected to Amplify
- [ ] First deployment successful
- [ ] All routes tested
- [ ] Mobile responsiveness checked
- [ ] Images optimized (recommended)
- [ ] Registration URL updated
- [ ] Custom domain configured (optional)

**Estimated Time:** 10-15 minutes total

🎉 You're ready to go live!
