"use client"
import { ReactNode, useState } from 'react';
import { Bell, MessageSquare, Search, Settings, User, Briefcase, Calendar, Plus, Heart, Share2, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function ProfessionalNetworkingApp() {
  const [activeTab, setActiveTab] = useState('feed');
  const [expandedPost, setExpandedPost] = useState<number | null>(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  
  const [postContent, setPostContent] = useState('');
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  interface Post {
    avatar: string | undefined;
    title: ReactNode;
    time: ReactNode;
    id: number;
    author: {
      name: string;
      title: string;
      avatar: string;
    };
    content: string;
    image?: string; // Optional field for post images
    timestamp: string;
    likes: number;
    comments: number;
  }
  const [posts, setPosts] = useState<Post[]>([]);

  const togglePost = (id: number): void => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLike = (postId: number) => {
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const handlePost = () => {
    if (postContent.trim()) {
      const newPost: Post = {
        id: Date.now(),
        author: {
          name: "Jatin Hans",
          title: "SWE Intern at NUdimension Pvt. Ltd.",
          avatar: "/jatin.jpg"
        },
        title: "SWE Intern at NUdimension Pvt. Ltd.",
        content: postContent,
        time: "Just now",
        avatar: "/jatin.jpg",
        timestamp: new Date().toISOString(),
        likes: 0,
        comments: 0
      };
      setPosts(prev => [newPost, ...prev]);
      setPostContent('');
    }
  };

  const jobPosts = [
    {
      id: 1,
      company: "Google",
      position: "Senior Frontend Developer",
      location: "Remote / San Francisco",
      posted: "2 days ago",
      description: "Join our team to build cutting-edge web applications using React, TypeScript, and Next.js. We're looking for an experienced developer who can lead UI initiatives.",
      salary: "$120k - $150k",
      skills: ["React", "TypeScript", "Next.js", "UI/UX"],
      logo: "/google.png"
    },
    {
      id: 2,
      company: "Microsoft",
      position: "Product Manager",
      location: "New York / Hybrid",
      posted: "1 day ago",
      description: "Lead product development for our SaaS platform. You'll work with cross-functional teams to define product strategy and roadmap.",
      salary: "$110k - $140k",
      skills: ["Product Strategy", "Agile", "User Research", "Analytics"],
      logo: "/mcs.png"
    },
    {
      id: 3,
      company: "Outlier",
      position: "Data Scientist",
      location: "Chicago / Remote",
      posted: "Just now",
      description: "Help us extract insights from complex datasets using machine learning and statistical analysis. Join a growing team focused on data-driven solutions.",
      salary: "$130k - $160k",
      skills: ["Python", "Machine Learning", "SQL", "Data Visualization"],
      logo: "/outlier.png"
    }
  ];

  const connections = [
    { id: 1, name: "Jordan Lee", title: "UX Designer at Creative Solutions", avatar: "/c1.jpg" },
    { id: 2, name: "Alex Morgan", title: "Software Engineer at TechForward", avatar: "/image.png" },
    { id: 3, name: "Taylor Rivera", title: "Product Manager at InnovateCorp", avatar: "/c2.jpg" }
  ];

  const networkSuggestions = [
    { id: 1, name: "Chris Harper", title: "UX Designer at DesignCraft", avatar: "/chris.jpg" },
    { id: 2, name: "Sarah Kim", title: "Developer at CodeWorks", avatar: "/sarah.jpg" },
    { id: 3, name: "Mike Johnson", title: "PM at TechCorp", avatar: "/mike.jpg" },
    { id: 4, name: "Emma Watson", title: "Designer at Artistry", avatar: "/emma.jpg" }
  ];

  const connectionRequests = [
    { id: 1, name: "Morgan Chen", title: "Product Manager at TechSphere", avatar: "/morgan.jpg" },
    { id: 2, name: "Lisa Patel", title: "Engineer at SoftPeak", avatar: "/lisa.jpg" }
  ];

  const groups = [
    { id: 1, name: "UX Design Professionals", members: 15203, posts: 48 },
    { id: 2, name: "Software Developers Network", members: 23450, posts: 62 },
    { id: 3, name: "Product Management Hub", members: 9876, posts: 35 },
    { id: 4, name: "Tech Innovators Group", members: 17432, posts: 53 }
  ];

  const events = [
    { id: 1, name: "Tech Conference 2025", date: "May 15", attendees: 532 },
    { id: 2, name: "React Developer Meetup", date: "April 25", attendees: 89 }
  ];

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className={`flex-shrink-0 font-bold text-xl ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                ConnectPro
              </div>
              <div className="hidden md:block ml-10">
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className={`block w-full pl-10 pr-3 py-2 border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} rounded-md leading-5 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    placeholder="Search jobs, people, companies..."
                  />
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button 
                className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                onClick={toggleDarkMode}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
              <button className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <Bell className="h-6 w-6" />
              </button>
              <button className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <MessageSquare className="h-6 w-6" />
              </button>
              <button className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <Settings className="h-6 w-6" />
              </button>
              <div className="ml-3 relative">
                <div>
                  <button className={`flex bg-gray-100 rounded-full focus:outline-none ${darkMode ? 'border-gray-600' : 'border-gray-300'} border-2 p-1`}>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="/jatin.jpg"
                      alt="User avatar"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button 
                className={`p-2 rounded-md ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                {showMobileMenu ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
              </button>
            </div>
          </div>
          {showMobileMenu && (
            <div className="md:hidden py-3 space-y-1 border-t">
              <div className="px-2 pt-2 pb-3 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className={`block w-full pl-10 pr-3 py-2 border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} rounded-md leading-5 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  placeholder="Search jobs, people, companies..."
                />
              </div>
              <div className="flex justify-between pt-2">
                <button className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                  <Bell className="h-6 w-6 mr-2" />
                  Notifications
                </button>
                <button 
                  className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                  onClick={toggleDarkMode}
                >
                  {darkMode ? '☀️' : '🌙'}
                </button>
              </div>
              <button className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} w-full`}>
                <MessageSquare className="h-6 w-6 mr-2" />
                Messages
              </button>
              <button className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} w-full`}>
                <Settings className="h-6 w-6 mr-2" />
                Settings
              </button>
              <button className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} w-full`}>
                <User className="h-6 w-6 mr-2" />
                Profile
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('feed')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'feed'
                  ? `${darkMode ? 'border-indigo-400 text-indigo-400' : 'border-indigo-500 text-indigo-600'}`
                  : `${darkMode ? 'border-transparent text-gray-400 hover:text-gray-300' : 'border-transparent text-gray-500 hover:text-gray-700'}`
              }`}
            >
              Feed
            </button>
            <button
              onClick={() => setActiveTab('jobs')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'jobs'
                  ? `${darkMode ? 'border-indigo-400 text-indigo-400' : 'border-indigo-500 text-indigo-600'}`
                  : `${darkMode ? 'border-transparent text-gray-400 hover:text-gray-300' : 'border-transparent text-gray-500 hover:text-gray-700'}`
              }`}
            >
              Jobs
            </button>
            <button
              onClick={() => setActiveTab('network')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'network'
                  ? `${darkMode ? 'border-indigo-400 text-indigo-400' : 'border-indigo-500 text-indigo-600'}`
                  : `${darkMode ? 'border-transparent text-gray-400 hover:text-gray-300' : 'border-transparent text-gray-500 hover:text-gray-700'}`
              }`}
            >
              Network
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'events'
                  ? `${darkMode ? 'border-indigo-400 text-indigo-400' : 'border-indigo-500 text-indigo-600'}`
                  : `${darkMode ? 'border-transparent text-gray-400 hover:text-gray-300' : 'border-transparent text-gray-500 hover:text-gray-700'}`
              }`}
            >
              Events
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left sidebar */}
            <div className="lg:w-1/4">
              <div className={`rounded-lg shadow-md overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className={`h-24 ${darkMode ? 'bg-indigo-800' : 'bg-indigo-500'}`}></div>
                <div className="px-4 py-5">
                  <div className="flex justify-center -mt-12">
                    <img
                      className="h-24 w-24 rounded-full border-4 border-white bg-white"
                      src="/jatin.jpg"
                      alt="Profile"
                    />
                  </div>
                  <div className="mt-5 text-center">
                    <h3 className="text-lg font-medium">Jatin Hans</h3>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      SWE Intern at NUdimension Pvt. Ltd.
                    </div>
                    <p className={`mt-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      AI/ML enthusiast
                    </p>
                  </div>
                  <div className="mt-5">
                    <button className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${darkMode ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-indigo-500 hover:bg-indigo-600'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
                      Edit Profile
                    </button>
                  </div>
                  <div className="mt-6">
                    <div className="flex justify-between text-sm font-medium">
                      <div className="text-center">
                        <div className="font-bold">825</div>
                        <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Connections</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold">43</div>
                        <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Posts</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold">168</div>
                        <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Profile views</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`mt-6 rounded-lg shadow-md overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <div className="p-4 border-b border-gray-200">
                  <h2 className="text-lg font-medium">Recent Connections</h2>
                </div>
                <div className="divide-y divide-gray-200">
                  {connections.map(connection => (
                    <div 
                      key={connection.id} 
                      className={`p-4 flex items-center ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}
                    >
                      <img className="h-10 w-10 rounded-full" src={connection.avatar} alt={connection.name} />
                      <div className="ml-3">
                        <div className="font-medium">{connection.name}</div>
                        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{connection.title}</div>
                      </div>
                    </div>
                  ))}
                  <div className={`p-3 text-center ${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'} cursor-pointer`}>
                    View all connections
                  </div>
                </div>
              </div>
            </div>

            {/* Main content area */}
            <div className="lg:w-2/4">
              {activeTab === 'feed' && (
                <>
                  <div className={`rounded-lg shadow-md overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <div className="p-4">
                      <div className="flex">
                        <img className="h-10 w-10 rounded-full" src="/jatin.jpg" alt="User" />
                        <div className="ml-3 flex-1">
                          <textarea
                            className={`w-full p-3 border rounded-lg ${darkMode ? 'bg-gray-700 border-white-600 text-white placeholder-white' : 'bg-gray-50 border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                            placeholder="Share an update or insight..."
                            rows={2}
                            value={postContent}
                            onChange={(e) => setPostContent(e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                      <div className="mt-3 flex justify-between">
                        <div className="flex space-x-4">
                          <button className={`flex items-center ${darkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'}`}>
                            <Plus className="h-5 w-5 mr-1" />
                            <span>Image</span>
                          </button>
                          <button className={`flex items-center ${darkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'}`}>
                            <Briefcase className="h-5 w-5 mr-1" />
                            <span>Job</span>
                          </button>
                        </div>
                        <button 
                          onClick={handlePost}
                          className={`px-4 py-2 rounded-md text-sm font-medium text-white ${darkMode ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-indigo-500 hover:bg-indigo-600'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                        >
                          Post
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-6">
                    {posts.map(post => (
                      <div key={post.id} className={`rounded-lg shadow-md overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <div className="p-4">
                          <div className="flex items-center">
                            <img className="h-10 w-10 rounded-full" src={post.avatar} alt={post.author.name} />
                            <div className="ml-3">
                              <div className="font-medium">{post.author.name}</div>
                              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                {post.title} • {post.time}
                              </div>
                            </div>
                          </div>
                          <div className="mt-4">
                            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                              {post.content}
                            </p>
                          </div>
                          <div className="mt-4 flex items-center space-x-4 text-sm">
                            <button 
                              onClick={() => handleLike(post.id)}
                              className={`flex items-center ${darkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'}`}
                            >
                              <Heart 
                                className={`h-5 w-5 mr-1 ${likedPosts.includes(post.id) ? 'text-red-500 fill-current' : ''}`} 
                              />
                              <span>{post.likes}</span>
                            </button>
                            <button className={`flex items-center ${darkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'}`}>
                              <MessageCircle className="h-5 w-5 mr-1" />
                              <span>{post.comments} comments</span>
                            </button>
                            <button className={`flex items-center ${darkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'}`}>
                              <Share2 className="h-5 w-5 mr-1" />
                              <span>Share</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className={`rounded-lg shadow-md overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <div className="p-4">
                        <div className="flex items-center">
                          <img className="h-10 w-10 rounded-full" src="/image.png" alt="Alex Morgan" />
                          <div className="ml-3">
                            <div className="font-medium">Alex Morgan</div>
                            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              Software Engineer at TechForward • 2h ago
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Just wrapped up a major project using React and TypeScript. The TypeScript integration really helped catch errors early in the development process. Has anyone else been using TypeScript with their React projects? Any tips or favorite configurations?
                          </p>
                        </div>
                        <div className="mt-4">
                          <img className="w-full h-64 object-cover rounded" src="/graduation.jpeg" alt="Code screenshot" />
                        </div>
                        <div className="mt-4 flex items-center space-x-4 text-sm">
                          <button 
                            onClick={() => handleLike(1)}
                            className={`flex items-center ${darkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'}`}
                          >
                            <Heart 
                              className={`h-5 w-5 mr-1 ${likedPosts.includes(1) ? 'text-red-500 fill-current' : ''}`} 
                            />
                            <span>128</span>
                          </button>
                          <button className={`flex items-center ${darkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'}`}>
                            <MessageCircle className="h-5 w-5 mr-1" />
                            <span>24 comments</span>
                          </button>
                          <button className={`flex items-center ${darkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'}`}>
                            <Share2 className="h-5 w-5 mr-1" />
                            <span>Share</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className={`rounded-lg shadow-md overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <div className="p-4">
                        <div className="flex items-center">
                          <img className="h-10 w-10 rounded-full" src="/c2.jpg" alt="Taylor Rivera" />
                          <div className="ml-3">
                            <div className="font-medium">Taylor Rivera</div>
                            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              Product Manager at InnovateCorp • 5h ago
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Excited to announce that we are hiring for multiple positions at InnovateCorp! We are looking for passionate individuals to join our product team. If you are interested in shaping the future of our products, check out our job listings.
                          </p>
                        </div>
                        <div className="mt-4 flex items-center space-x-4 text-sm">
                          <button 
                            onClick={() => handleLike(2)}
                            className={`flex items-center ${darkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'}`}
                          >
                            <Heart 
                              className={`h-5 w-5 mr-1 ${likedPosts.includes(2) ? 'text-red-500 fill-current' : ''}`} 
                            />
                            <span>86</span>
                          </button>
                          <button className={`flex items-center ${darkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'}`}>
                            <MessageCircle className="h-5 w-5 mr-1" />
                            <span>12 comments</span>
                          </button>
                          <button className={`flex items-center ${darkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'}`}>
                            <Share2 className="h-5 w-5 mr-1" />
                            <span>Share</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'jobs' && (
                <>
                  <div className={`mb-6 rounded-lg shadow-md overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <h2 className="text-lg font-medium">Recommended Jobs</h2>
                        <div className={`text-sm ${darkMode ? 'text-indigo-400' : 'text-indigo-600'} cursor-pointer`}>See all</div>
                      </div>
                      <div className="mt-2 flex overflow-x-auto py-2 space-x-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-indigo-800 text-indigo-200' : 'bg-indigo-100 text-indigo-800'}`}>
                          Remote
                        </span>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'}`}>
                          Full-time
                        </span>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'}`}>
                          Tech
                        </span>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'}`}>
                          Design
                        </span>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'}`}>
                          Marketing
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {jobPosts.map(job => (
                      <div 
                        key={job.id} 
                        className={`rounded-lg shadow-md overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-all duration-300 ${expandedPost === job.id ? 'transform scale-102' : ''}`}
                      >
                        <div className="p-4">
                          <div className="flex items-start">
                            <img
                              className="h-12 w-12 rounded-md object-cover"
                              src={job.logo}
                              alt={job.company}
                            />
                            <div className="ml-4 flex-1">
                              <div className="flex justify-between">
                                <div>
                                  <h3 className="text-lg font-medium">{job.position}</h3>
                                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {job.company} • {job.location}
                                  </div>
                                </div>
                                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                  {job.posted}
                                </div>
                              </div>
                              {expandedPost === job.id ? (
                                <div className={`mt-3 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                  <p className="mb-3">{job.description}</p>
                                  <div className="mb-3">
                                    <span className="font-medium">Salary Range:</span> {job.salary}
                                  </div>
                                  <div>
                                    <span className="font-medium">Required Skills:</span>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                      {job.skills.map((skill, index) => (
                                        <span 
                                          key={index} 
                                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'}`}
                                        >
                                          {skill}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div className={`mt-3 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} line-clamp-2`}>
                                  {job.description}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="mt-4 flex justify-between items-center">
                            <button className={`px-4 py-2 rounded-md text-sm font-medium text-white ${darkMode ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-indigo-500 hover:bg-indigo-600'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
                              Apply Now
                            </button>
                            <button 
                              onClick={() => togglePost(job.id)}
                              className={`flex items-center ${darkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'}`}
                            >
                              {expandedPost === job.id ? (
                                <>
                                  <ChevronUp className="h-5 w-5 mr-1" />
                                  <span>Show less</span>
                                </>
                              ) : (
                                <>
                                  <ChevronDown className="h-5 w-5 mr-1" />
                                  <span>Show more</span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {activeTab === 'network' && (
                <div className="space-y-6">
                  <div className={`rounded-lg shadow-md overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <div className="p-4 border-b border-gray-200">
                      <h2 className="text-lg font-medium">People You May Know</h2>
                    </div>
                    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {networkSuggestions.map(suggestion => (
                        <div 
                          key={suggestion.id} 
                          className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} flex flex-col items-center text-center`}
                        >
                          <img
                            className="h-16 w-16 rounded-full mb-3"
                            src={suggestion.avatar}
                            alt={suggestion.name}
                          />
                          <h3 className="font-medium">{suggestion.name}</h3>
                          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-3`}>{suggestion.title}</p>
                          <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-3`}>12 mutual connections</p>
                          <button className={`w-full py-1 px-3 rounded-md text-sm font-medium ${darkMode ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-indigo-100 hover:bg-indigo-200 text-indigo-700'} transition-colors`}>
                            Connect
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className={`p-3 text-center ${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'} cursor-pointer border-t border-gray-200`}>
                      See more suggestions
                    </div>
                  </div>

                  <div className={`rounded-lg shadow-md overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <div className="p-4 border-b border-gray-200">
                      <h2 className="text-lg font-medium">Connection Requests</h2>
                    </div>
                    <div className="divide-y divide-gray-200">
                      {connectionRequests.map(request => (
                        <div key={request.id} className="p-4 flex items-start">
                          <img
                            className="h-12 w-12 rounded-full"
                            src={request.avatar}
                            alt={request.name}
                          />
                          <div className="ml-3 flex-1">
                            <div className="font-medium">{request.name}</div>
                            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              {request.title}
                            </div>
                            <p className={`mt-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                              Would love to connect and discuss opportunities!
                            </p>
                            <div className="mt-3 flex space-x-3">
                              <button className={`px-4 py-2 rounded-md text-sm font-medium text-white ${darkMode ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-indigo-500 hover:bg-indigo-600'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
                                Accept
                              </button>
                              <button className={`px-4 py-2 rounded-md text-sm font-medium ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}>
                                Ignore
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`rounded-lg shadow-md overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <div className="p-4 border-b border-gray-200">
                      <h2 className="text-lg font-medium">Groups to Join</h2>
                    </div>
                    <div className="divide-y divide-gray-200">
                      {groups.map(group => (
                        <div key={group.id} className="p-4 flex">
                          <div className={`h-12 w-12 rounded-md flex items-center justify-center ${darkMode ? 'bg-indigo-800' : 'bg-indigo-100'}`}>
                            <Briefcase className={`h-6 w-6 ${darkMode ? 'text-indigo-200' : 'text-indigo-600'}`} />
                          </div>
                          <div className="ml-3 flex-1">
                            <div className="flex justify-between">
                              <div>
                                <div className="font-medium">{group.name}</div>
                                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                  {group.members} members • {group.posts} posts/week
                                </div>
                              </div>
                              <button className={`px-3 py-1 h-8 rounded-md text-sm font-medium ${darkMode ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-indigo-100 hover:bg-indigo-200 text-indigo-700'}`}>
                                Join
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className={`p-3 text-center ${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'} cursor-pointer border-t border-gray-200`}>
                      Explore more groups
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'events' && (
                <div className="space-y-6">
                  <div className={`rounded-lg shadow-md overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <div className="p-4 border-b border-gray-200">
                      <h2 className="text-lg font-medium">Featured Events</h2>
                    </div>
                    <div className="p-4">
                      <div className={`rounded-lg overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                        <img
                          className="w-full h-48 object-cover"
                          src="/conference.jpeg"
                          alt="Event banner"
                        />
                        <div className="p-4">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-5 w-5 text-indigo-500" />
                            <span className={`text-sm font-medium ${darkMode ? 'text-indigo-300' : 'text-indigo-600'}`}>Apr 25, 2025 • 2:00 PM EDT</span>
                          </div>
                          <h3 className="mt-2 text-xl font-bold">Tech Innovation Summit 2025</h3>
                          <p className={`mt-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Join industry leaders and innovative thinkers for a day of insights, networking, and collaboration focused on emerging technologies and future trends.
                          </p>
                          <div className="mt-4 flex items-center justify-between">
                            <div className="flex -space-x-2">
                              {[1, 2, 3, 4].map((item) => (
                                <img
                                  key={item}
                                  className="h-8 w-8 rounded-full ring-2 ring-white"
                                  src="/profile.png"
                                  alt="Attendee"
                                />
                              ))}
                              <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-medium ${darkMode ? 'bg-gray-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                                +86
                              </div>
                            </div>
                            <button className={`px-4 py-2 rounded-md text-sm font-medium text-white ${darkMode ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-indigo-500 hover:bg-indigo-600'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
                              Register
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`rounded-lg shadow-md overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <div className="p-4 border-b border-gray-200">
                      <h2 className="text-lg font-medium">Upcoming Events</h2>
                    </div>
                    <div className="divide-y divide-gray-200">
                      {events.map(event => (
                        <div key={event.id} className="p-4 flex items-start">
                          <div className={`h-14 w-14 rounded-md ${darkMode ? 'bg-indigo-800 text-indigo-200' : 'bg-indigo-100 text-indigo-800'} flex flex-col items-center justify-center text-center`}>
                            <div className="text-xs font-medium">APR</div>
                            <div className="text-lg font-bold">{event.date.split(' ')[1]}</div>
                          </div>
                          <div className="ml-4 flex-1">
                            <div className="flex justify-between">
                              <div>
                                <h3 className="font-medium">{event.name}</h3>
                                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                  Virtual • {event.attendees} attendees
                                </div>
                              </div>
                              <button className={`px-3 py-1 h-8 rounded-md text-sm font-medium ${darkMode ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-indigo-100 hover:bg-indigo-200 text-indigo-700'}`}>
                                Interested
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className={`p-3 text-center ${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'} cursor-pointer border-t border-gray-200`}>
                      View more events
                    </div>
                  </div>

                  <div className={`rounded-lg shadow-md overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <div className="p-4 flex justify-between items-center border-b border-gray-200">
                      <h2 className="text-lg font-medium">Host Your Own Event</h2>
                      <button className={`px-4 py-2 rounded-md text-sm font-medium text-white ${darkMode ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-indigo-500 hover:bg-indigo-600'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
                        Create Event
                      </button>
                    </div>
                    <div className="p-4">
                      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Share your expertise, build your network, and establish yourself as a thought leader in your industry by hosting a virtual or in-person event.
                      </p>
                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} text-center`}>
                          <div className="font-medium mb-1">Webinars</div>
                          <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Share insights with a wide audience</p>
                        </div>
                        <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} text-center`}>
                          <div className="font-medium mb-1">Workshops</div>
                          <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Interactive skill-building sessions</p>
                        </div>
                        <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} text-center`}>
                          <div className="font-medium mb-1">Networking</div>
                          <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Connect with industry peers</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right sidebar */}
            <div className="lg:w-1/4">
              <div className={`rounded-lg shadow-md overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="p-4 border-b border-gray-200">
                  <h2 className="text-lg font-medium">Trending Topics</h2>
                </div>
                <div className="divide-y divide-gray-200">
                  {[
                    { tag: '#TechTrends2025', posts: 1243 },
                    { tag: '#RemoteWork', posts: 856 },
                    { tag: '#AIInnovation', posts: 712 },
                    { tag: '#CareerGrowth', posts: 645 },
                    { tag: '#ProductDesign', posts: 523 }
                  ].map((topic, index) => (
                    <div 
                      key={index} 
                      className={`p-3 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}
                    >
                      <div className="font-medium">{topic.tag}</div>
                      <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{topic.posts} posts</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`mt-6 rounded-lg shadow-md overflow-hidden ${darkMode ? 'bg-indigo-900 text-indigo-100' : 'bg-indigo-50 text-indigo-900'}`}>
                <div className="p-4">
                  <h2 className="text-lg font-medium">Upgrade to Premium</h2>
                  <p className="mt-2 text-sm">Get access to exclusive features and insights to accelerate your career growth.</p>
                  <ul className="mt-4 space-y-2">
                    {[
                      'See who viewed your profile',
                      'Advanced job search filters',
                      'Direct messaging to hiring managers',
                      'Exclusive industry reports and insights'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <div className="mr-2">✓</div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium ${darkMode ? 'bg-white text-indigo-900 hover:bg-gray-100' : 'bg-indigo-600 text-white hover:bg-indigo-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
                    Try Premium Free
                  </button>
                </div>
              </div>

              <div className={`mt-6 rounded-lg shadow-md overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="p-4 border-b border-gray-200">
                  <h2 className="text-lg font-medium">Suggested Articles</h2>
                </div>
                <div className="divide-y divide-gray-200">
                  {[
                    'The Future of Remote Work in Tech Companies',
                    'How to Optimize Your Professional Profile for Job Opportunities',
                    '10 Networking Strategies That Actually Work'
                  ].map((article, index) => (
                    <div 
                      key={index} 
                      className={`p-3 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}
                    >
                      <div className="font-medium text-sm">{article}</div>
                      <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>5 min read</div>
                    </div>
                  ))}
                  <div className={`p-3 text-center ${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'} cursor-pointer`}>
                    Show more articles
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`mt-8 py-6 ${darkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-medium">General</h3>
              <ul className="mt-4 space-y-2">
                <li className="text-sm">About Us</li>
                <li className="text-sm">Pricing</li>
                <li className="text-sm">FAQ</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li className="text-sm">Blog</li>
                <li className="text-sm">Help Center</li>
                <li className="text-sm">Guides</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li className="text-sm">Privacy Policy</li>
                <li className="text-sm">Terms of Service</li>
                <li className="text-sm">Cookies</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">Connect</h3>
              <ul className="mt-4 space-y-2">
                <li className="text-sm">Contact Us</li>
                <li className="text-sm">Twitter</li>
                <li className="text-sm">LinkedIn</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="flex-shrink-0 font-bold text-xl mb-4 md:mb-0">ConnectPro</div>
            <p className="text-sm">© 2025 ConnectPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}