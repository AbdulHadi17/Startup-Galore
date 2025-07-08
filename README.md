# Startup Galore 🚀

A modern full-stack web application where entrepreneurs can pitch their startup ideas, connect with other founders, and discover innovative projects. Built with cutting-edge technologies for optimal performance and user experience.

## 🌟 Features

- **User Authentication**: Secure GitHub OAuth integration
- **Startup Pitch Submission**: Rich markdown editor for detailed pitches
- **Real-time Search**: Search startups by title, category, or author
- **User Profiles**: Personalized author pages with their submissions
- **View Tracking**: Real-time view counter for each startup
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Content Management**: Sanity CMS for easy content administration
- **Type Safety**: Full TypeScript implementation with auto-generated types

## 🛠️ Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn/ui](https://ui.shadcn.com/)** - Reusable UI components
- **[Lucide React](https://lucide.dev/)** - Icon library

### Backend & Database
- **[Sanity CMS](https://www.sanity.io/)** - Headless content management
- **[Next-Sanity](https://github.com/sanity-io/next-sanity)** - Sanity integration for Next.js
- **[GROQ](https://www.sanity.io/docs/groq)** - Graph-Relational Object Queries

### Authentication
- **[NextAuth.js 5](https://next-auth.js.org/)** - Authentication for Next.js
- **[GitHub Provider](https://next-auth.js.org/providers/github)** - GitHub OAuth

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Markdown-it](https://github.com/markdown-it/markdown-it)** - Markdown parsing
- **[Zod](https://zod.dev/)** - Schema validation

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js (v18 or later)
- npm or yarn
- Git

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-06-20
SANITY_WRITE_TOKEN=your_sanity_write_token

# NextAuth Configuration
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# GitHub OAuth
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/startup-galore.git
   cd startup-galore
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Sanity**
   ```bash
   # Install Sanity CLI globally
   npm install -g @sanity/cli
   
   # Login to Sanity
   sanity login
   
   # Create a new Sanity project or use existing
   sanity init
   ```

4. **Generate Sanity types**
   ```bash
   npm run sanity:typegen
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Start Sanity Studio** (in a new terminal)
   ```bash
   npm run sanity:dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the application.
Access Sanity Studio at [http://localhost:3000/studio](http://localhost:3000/studio).

## 🏗️ Project Structure

```
src/
├── app/
│   ├── (root)/                 # Main application routes
│   │   ├── page.tsx           # Home page
│   │   ├── startups/
│   │   │   ├── [id]/          # Individual startup pages
│   │   │   └── create/        # Create startup form
│   │   └── users/[id]/        # User profile pages
│   ├── api/auth/              # NextAuth API routes
│   ├── globals.css            # Global styles
│   └── layout.tsx             # Root layout
├── components/
│   ├── ui/                    # Reusable UI components
│   ├── StartupCard.tsx        # Startup display component
│   ├── StartupForm.tsx        # Create startup form
│   ├── navbar.tsx             # Navigation component
│   └── searchbar.tsx          # Search functionality
├── lib/
│   ├── actions.ts             # Server actions
│   ├── validation.ts          # Form validation schemas
│   └── utils.ts               # Utility functions
└── sanity/
    ├── lib/                   # Sanity client configuration
    ├── schemaTypes/           # Content schemas
    └── types.ts               # Auto-generated types
```

## 🔧 Key Features Explained

### Content Management
- **Sanity Schemas**: Define structured content for startups, authors, and playlists
- **Auto-generated Types**: TypeScript types automatically generated from Sanity schemas
- **Real-time Updates**: Live content updates without page refresh

### Authentication Flow
- **GitHub OAuth**: Secure authentication using GitHub accounts
- **User Creation**: Automatic user profile creation in Sanity
- **Session Management**: Persistent sessions with NextAuth

### Search & Filtering
- **GROQ Queries**: Powerful search across titles, categories, and authors
- **Real-time Results**: Instant search results as you type
- **URL Parameters**: Shareable search URLs

### Form Validation
- **Zod Schemas**: Type-safe form validation
- **Image URL Validation**: Ensures valid image URLs
- **Real-time Feedback**: Instant validation feedback

## 📱 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint

# Sanity
sanity deploy        # Deploy Sanity Studio
sanity typegen       # Generate TypeScript types
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Follow the code style**
   - Use TypeScript
   - Follow existing patterns
   - Add proper types
5. **Test your changes**
6. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
7. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
8. **Open a Pull Request**

### Code Style Guidelines
- Use TypeScript for all new files
- Follow the existing component structure
- Use Tailwind CSS for styling
- Ensure proper error handling
- Add comments for complex logic

## 🐛 Bug Reports

If you encounter any bugs, please create an issue with:

1. **Bug Description**: Clear description of the issue
2. **Steps to Reproduce**: Step-by-step instructions
3. **Expected Behavior**: What should happen
4. **Actual Behavior**: What actually happens
5. **Environment**: Browser, OS, Node.js version
6. **Screenshots**: If applicable

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Sanity** for the excellent headless CMS
- **Vercel** for Next.js and deployment platform
- **Shadcn** for beautiful UI components
- **Tailwind CSS** for utility-first styling
- **NextAuth.js** for authentication

## 📞 Support

For support, please open an issue on GitHub or contact the maintainers.

---
