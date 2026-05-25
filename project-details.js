// Project Data Structure
const projectsData = {
    'data-analysis': {
        title: 'Data Analysis Agent',
        tagline: 'Automated data analysis platform with AI-powered insights',
        year: 2024,
        status: 'Completed',
        github: 'https://github.com/Meet2002045p/Data-Analysis-Agent',
        live: 'https://data-analysis-agent.streamlit.app',
        overview: `
            <p>The Data Analysis Agent is a powerful, interactive platform built with Python and Streamlit. It is designed to automate the end-to-end data analysis process, from data ingestion and profiling to advanced anomaly detection, feature engineering, and AI-powered insights.</p>
            <p>This tool empowers data scientists and analysts to quickly understand their datasets, identify hidden patterns, and get modeling recommendations without writing extensive code.</p>
        `,
        features: [
            {
                title: '1. Multi-Format Data Ingestion',
                description: 'Versatile Loading: Seamlessly upload and load data from various formats including CSV, Parquet, and SQL files. Robust Handling: Automatically handles file parsing and connection strings for SQL databases.'
            },
            {
                title: '2. Automated Data Profiling',
                description: 'Instant Overview: Get a snapshot of your dataset with total rows, columns, and duplicate counts. Automatically identifies missing values and data inconsistencies with detailed statistics.'
            },
            {
                title: '3. Interactive Visualization',
                description: 'Auto-Visualization: The agent intelligently selects and generates charts (Histograms, Bar Charts, Scatter Plots) based on your data types. All charts are interactive, built using Plotly.'
            },
            {
                title: '4. Advanced Anomaly Detection',
                description: 'Uses the robust Isolation Forest algorithm to detect outliers in your numerical data with high accuracy and reliability.'
            },
            {
                title: '5. Smart Modeling Recommendations',
                description: 'Task-Specific Advice: Select your goal (Classification or Regression) and receive tailored model recommendations. Data-Aware suggestions based on dataset characteristics.'
            },
            {
                title: '6. Feature Engineering Suggestions',
                description: 'Automated Transformation Tips: Log Transformations for skewed data, One-Hot/Target Encoding for categorical variables, Date Feature Extraction for time-series data.'
            },
            {
                title: '7. AI-Powered Insights 🧠',
                description: 'Intelligent Q&A: Ask natural language questions about your data. The agent uses dataset metadata to provide relevant answers.'
            },
            {
                title: '8. Reporting',
                description: 'PDF Generation: Export a comprehensive analysis report including profiles, correlations, and insights with a single click.'
            }
        ],
        installation: `
            <h3>Prerequisites</h3>
            <ul>
                <li>Python 3.8 or higher</li>
                <li>pip (Python package installer)</li>
            </ul>
            <h3>Steps</h3>
            <ol>
                <li><strong>Clone the Repository:</strong> <code>git clone https://github.com/Meet2002045p/Data-Analysis-Agent</code></li>
                <li><strong>Create a Virtual Environment:</strong>
                    <ul>
                        <li>Windows: <code>venv\\Scripts\\activate</code></li>
                        <li>macOS/Linux: <code>source venv/bin/activate</code></li>
                    </ul>
                </li>
                <li><strong>Install Dependencies:</strong> <code>pip install -r requirements.txt</code></li>
                <li><strong>Environment Setup (Optional):</strong> Create a .env file and add your OpenAI API key for live AI features.</li>
            </ol>
        `,
        usage: `
            <h3>Running the Application</h3>
            <ol>
                <li>Execute the command: <code>streamlit run app.py</code></li>
                <li>The application will automatically open in your default web browser at <code>http://localhost:8501</code></li>
            </ol>
            <h3>Workflow</h3>
            <ul>
                <li><strong>Upload:</strong> Use the sidebar to upload your dataset (CSV, Parquet, or SQL)</li>
                <li><strong>Explore:</strong> Navigate through the tabs:
                    <ul>
                        <li>Overview: See raw data and profiles</li>
                        <li>Deep Dive: Visualize distributions and relationships</li>
                        <li>Anomalies: Detect and view outliers</li>
                        <li>Modeling: Get model and feature engineering suggestions</li>
                        <li>Insights: Chat with your data</li>
                    </ul>
                </li>
                <li><strong>Export:</strong> Generate a PDF report of your session</li>
            </ul>
        `,
        technologies: ['Python', 'Streamlit', 'Pandas', 'NumPy', 'Plotly', 'Scikit-learn', 'SQLAlchemy', 'OpenAI', 'FPDF'],
        structure: `📂 Data-Analysis-Agent/
├── app.py                 # Main Streamlit application entry point
├── requirements.txt       # List of Python dependencies
├── src/
│   ├── data_loader.py     # Handles file reading (CSV, Parquet, SQL)
│   ├── profiler.py        # Generates summary statistics and profiles
│   ├── visualizer.py      # Logic for automated and custom plotting
│   ├── models.py          # Anomaly detection and model recommendation logic
│   ├── insights.py        # AI/LLM interaction logic
│   ├── scaledown.py       # Metadata computation utilities
│   └── reporter.py        # PDF report generation
└── README.md              # Project documentation`,
        highlights: [
            'End-to-end automated data analysis',
            'Advanced anomaly detection with Isolation Forest',
            'Interactive visualizations with Plotly',
            'AI-powered natural language Q&A',
            'Smart ML model recommendations',
            'PDF report generation',
            'Multi-format data support',
            'Real-time feature engineering suggestions'
        ],
        additional: `
            <p><strong>Built with ❤️ for Data Science enthusiasts.</strong></p>
            <p>This project demonstrates the power of combining modern data science libraries with an intuitive user interface to democratize data analysis. Whether you are exploring a new dataset or building a data pipeline, the Data Analysis Agent provides all the tools you need.</p>
        `
    },
    'carbonzero': {
        title: 'CarbonZero 🌱',
        tagline: 'Modern sustainability calculator for carbon footprint estimation',
        year: 2024,
        status: 'Completed',
        github: 'https://github.com/Meet2002045p/CarbonZero---Sustainability-Calculator',
        live: 'https://carbonzero.streamlit.app',
        overview: `
            <p>CarbonZero is a modern, Python-based web application designed to help individuals estimate their monthly carbon footprint. Built with Streamlit, it offers a seamless and interactive experience to calculate emissions from various sources.</p>
            <p>The application provides personalized recommendations for a sustainable lifestyle and enables users to make data-driven decisions to reduce their environmental impact.</p>
        `,
        features: [
            {
                title: '🚗 Transportation Emissions',
                description: 'Calculate emissions from Car (Petrol/Diesel), Bus, Train, and Flight travel. Detailed breakdown of your mobility carbon footprint.'
            },
            {
                title: '⚡ Electricity Impact',
                description: 'Measure your household energy consumption and its environmental impact based on regional power grids and energy sources.'
            },
            {
                title: '🍽️ Diet Analysis',
                description: 'Assess emissions from dietary choices ranging from Meat-heavy to Vegan. Understand the carbon cost of your food consumption.'
            },
            {
                title: '🔥 Fuel Usage',
                description: 'Track emissions from LPG, Natural Gas, coal, and other fuel sources used in your home or activities.'
            },
            {
                title: '📊 Interactive Visualizations',
                description: 'View a dynamic breakdown of your carbon footprint with beautiful, responsive charts from Altair and interactive graphs.'
            },
            {
                title: '💡 Personalized Recommendations',
                description: 'Get actionable, tailored tips based on your specific results to reduce environmental impact and live sustainably.'
            },
            {
                title: '📄 PDF Report',
                description: 'Download a detailed PDF summary of your footprint analysis and personalized recommendations for future reference.'
            },
            {
                title: '🎨 Premium UI/UX',
                description: 'Clean, responsive interface with modern aesthetic, dark/light mode optimization, and smooth interactions throughout.'
            }
        ],
        installation: `
            <h3>Prerequisites</h3>
            <ul>
                <li>Python 3.8 or higher installed</li>
                <li>pip (Python package installer)</li>
            </ul>
            <h3>Setup Steps</h3>
            <ol>
                <li><strong>Clone the Repository:</strong> <code>git clone https://github.com/Meet2002045p/CarbonZero---Sustainability-Calculator</code></li>
                <li><strong>Navigate to Directory:</strong> <code>cd carbonzero</code></li>
                <li><strong>Install Dependencies:</strong> <code>pip install streamlit pandas altair fpdf</code></li>
                <li><strong>Run the Application:</strong> <code>streamlit run streamlit_app.py</code></li>
                <li><strong>Access Calculator:</strong> Open http://localhost:8501 in your browser</li>
            </ol>
        `,
        usage: `
            <h3>How to Use</h3>
            <ol>
                <li>Open the CarbonZero application in your web browser</li>
                <li>Select your lifestyle categories (Transportation, Electricity, Diet, Fuel)</li>
                <li>Enter your consumption data for each category</li>
                <li>View your total monthly carbon footprint</li>
                <li>Explore interactive visualizations of your emissions breakdown</li>
                <li>Read personalized recommendations tailored to your results</li>
                <li>Download a PDF report for your records</li>
                <li>Track your progress over time and adjust habits</li>
            </ol>
            <h3>Key Components</h3>
            <ul>
                <li><strong>streamlit_app.py:</strong> Main application entry point with UI and interaction logic</li>
                <li><strong>calculator.py:</strong> Core logic for carbon emission calculations</li>
                <li><strong>emission_factors.json:</strong> Database of emission factors used in calculations</li>
                <li><strong>.streamlit/config.toml:</strong> Configuration for custom visual theme</li>
            </ul>
        `,
        technologies: ['Python', 'Streamlit', 'Pandas', 'Altair', 'FPDF', 'JSON'],
        structure: `📂 CarbonZero/
├── streamlit_app.py          # Main application entry point & UI logic
├── calculator.py             # Core carbon calculation logic
├── requirements.txt          # Python dependencies
├── data/
│   └── emission_factors.json # Database of emission factors
├── templates/ & static/      # Legacy Flask files
├── .streamlit/
│   └── config.toml          # Custom visual theme configuration
└── README.md                 # Project documentation`,
        highlights: [
            'Comprehensive multi-category carbon calculator',
            'Real-time emission calculations',
            'Interactive Altair visualizations',
            'Personalized sustainability recommendations',
            'PDF report generation',
            'Dark/Light mode optimization',
            'Clean, responsive UI design',
            'Emission factor database'
        ],
        additional: `
            <p><strong>Built with ❤️ for a Greener Planet.</strong></p>
            <p>CarbonZero empowers individuals to understand and reduce their environmental impact. By providing accurate calculations and actionable insights, it makes sustainability accessible to everyone. Join the movement towards a more sustainable future!</p>
        `
    },
    'neural-network': {
        title: 'Neural Network Visualization',
        tagline: 'Interactive Deep Learning visualization for handwritten character recognition',
        year: 2024,
        status: 'Completed',
        github: 'https://github.com/Meet2002045p/-Neural-Network-Visualization-Handwritten-Recognition-AI',
        live: 'https://neural-network-viz.streamlit.app',
        overview: `
            <p>A high-performance, interactive web application that visualizes how a Deep Convolutional Neural Network (CNN) sees and recognizes handwritten digits (0-9) and alphabets (A-Z).</p>
            <p>Designed with a premium "Lab Paper" aesthetic and biological neural visualization, this project demonstrates real-time AI predictions and network activation patterns.</p>
        `,
        features: [
            {
                title: '1. Deep Learning Brain',
                description: 'Powered by a custom CNN trained on the EMNIST Balanced dataset (47 classes) to ~88% accuracy with excellent performance.'
            },
            {
                title: '2. Smart Vision 👁️',
                description: 'Features "Center of Mass" preprocessing that automatically detects, crops, and centers drawings—making the app incredibly robust to messy or off-center inputs.'
            },
            {
                title: '3. Vertical Neural Stack',
                description: 'A unique visualization that mimics biological signal flow (Input → Hidden Layers → Output) vertically up the screen.'
            },
            {
                title: '4. Dynamic Synapses',
                description: 'Watch the network "think" in real-time. Connections light up in Blue (Excitatory) and Magenta (Inhibitory) as signals propagate through layers.'
            },
            {
                title: '5. Universal Recognition',
                description: 'Supports Digits (0-9), Uppercase (A-Z), and Lowercase (a-z) characters with high accuracy.'
            },
            {
                title: '6. Premium UI',
                description: 'Clean, modern "Light Mode" interface with glassmorphism, smooth animations, and responsive design for all devices.'
            },
            {
                title: '7. Real-Time Prediction',
                description: 'Instant character recognition with confidence scores displayed as the neural network processes your drawing.'
            },
            {
                title: '8. Interactive Canvas',
                description: 'Draw freely with a responsive canvas interface. Easy-to-use clear button and instant visual feedback.'
            }
        ],
        installation: `
            <h3>Prerequisites</h3>
            <ul>
                <li>Python 3.8 or higher</li>
                <li>pip (Python package installer)</li>
            </ul>
            <h3>Setup Steps</h3>
            <ol>
                <li><strong>Clone the Repository:</strong> <code>git clone https://github.com/Meet2002045p/-Neural-Network-Visualization-Handwritten-Recognition-AI</code></li>
                <li><strong>Install Dependencies:</strong> <code>pip install -r backend/requirements.txt</code></li>
                <li><strong>Train the Model (Optional):</strong> <code>python backend/train_model.py</code></li>
                <li><strong>Start the Backend:</strong> <code>python backend/app.py</code></li>
                <li><strong>Open in Browser:</strong> Visit <code>http://localhost:5000</code></li>
            </ol>
        `,
        usage: `
            <h3>How to Use</h3>
            <ol>
                <li>Draw any character (0-9, A-Z, a-z) in the "Draw Here" box at the bottom</li>
                <li>Watch the signals travel up through the neural layers in the center visualization</li>
                <li>See the AI's prediction appear at the top with confidence score</li>
                <li>Observe the synapses lighting up as the network processes your input</li>
                <li>Use the Clear button to start over and draw another character</li>
            </ol>
            <h3>Model Architecture</h3>
            <ul>
                <li><strong>Input:</strong> 28×28 Grayscale Image</li>
                <li><strong>Conv2D Block 1:</strong> 32 Filters (3×3), ReLU, Batch Norm, MaxPool</li>
                <li><strong>Conv2D Block 2:</strong> 64 Filters (3×3), ReLU, Batch Norm, MaxPool (Extracts complex features)</li>
                <li><strong>Dense Layer 1:</strong> 256 Neurons (High-level reasoning)</li>
                <li><strong>Dense Layer 2:</strong> 128 Neurons</li>
                <li><strong>Output:</strong> 47 Neurons (Softmax probability distribution for each character)</li>
            </ul>
        `,
        technologies: ['Python', 'Flask', 'TensorFlow', 'Keras', 'HTML5', 'CSS3', 'JavaScript', 'Canvas API', 'NumPy', 'Pillow', 'Scikit-Learn'],
        structure: `📂 Neural-Network-Visualization/
├── backend/
│   ├── app.py                # Main Flask Application Server (API & Logic)
│   ├── train_model.py        # CNN Training Script (TensorFlow/Keras)
│   ├── emnist_model.h5       # The Trained AI Model File (~4MB)
│   ├── requirements.txt      # Python Dependencies
│   └── helper_scripts/       # Data processing utilities
│
├── frontend/
│   ├── index.html            # Main User Interface Structure
│   ├── styles.css            # Premium Styling (CSS Variables, Animations)
│   └── script.js             # Frontend Logic (Drawing, API, Visualization)
│
└── README.md                 # Project Documentation`,
        highlights: [
            'Custom CNN trained on EMNIST Balanced (47 classes)',
            'Real-time neural network visualization',
            'Center of Mass preprocessing for robust recognition',
            'Dynamic synapse activation visualization',
            'Premium glassmorphism UI design',
            'Support for digits and alphabets',
            'Vertical biological signal flow visualization',
            'Interactive drawing canvas with instant feedback'
        ],
        additional: `
            <p><strong>Built with deep learning passion and premium UI design.</strong></p>
            <p>This project showcases the intersection of machine learning and interactive visualization, making complex neural network concepts accessible and visually stunning. Perfect for learning how AI sees the world!</p>
        `
    },
    'air-drawing': {
        title: 'Air Drawing 🎨',
        tagline: 'Real-time hand gesture-based virtual drawing application',
        year: 2024,
        status: 'Production Ready',
        github: 'https://github.com/Meet2002045p/Air-Drawing-Using-Hand-Gesture-Recognition',
        live: '#',
        overview: `
            <p>Air Drawing Using Hand Gesture Recognition is a real-time computer vision application that allows users to draw on a virtual canvas using hand gestures and finger positions detected through a webcam.</p>
            <p>The application uses MediaPipe's Hand Landmarker to track hand landmarks and enables drawing by detecting a pinch gesture between the index finger and thumb. This project demonstrates advanced computer vision techniques including hand detection, landmark tracking, gesture recognition, and smooth drawing mechanics.</p>
        `,
        features: [
            {
                title: '✋ Real-time Hand Detection',
                description: 'Detects and tracks up to 2 hands simultaneously with precise 21-point landmark tracking per hand.'
            },
            {
                title: '🎨 Gesture-based Drawing',
                description: 'Draw by bringing the index finger and thumb together (pinch gesture) with intuitive natural interaction.'
            },
            {
                title: '🌈 Multiple Colors',
                description: 'Switch between Red, Green, Blue, and Yellow colors using keyboard shortcuts for creative control.'
            },
            {
                title: '📏 Adjustable Brush Size',
                description: 'Increase or decrease brush thickness dynamically using +/- keys for fine or bold strokes.'
            },
            {
                title: '✨ Smooth Drawing',
                description: 'Exponential moving average smoothing algorithm creates smooth curved lines without jitter.'
            },
            {
                title: '💾 Save Drawings',
                description: 'Save your artwork as PNG images with a single keypress for sharing or archiving.'
            },
            {
                title: '📊 Visual Feedback',
                description: 'Cursor color changes (Green = Drawing, Red = Hovering) for intuitive mode indication.'
            },
            {
                title: '🖥️ High Resolution',
                description: 'Supports up to 1280x720 resolution for crystal-clear drawings and detailed hand tracking.'
            }
        ],
        installation: `
            <h3>System Requirements</h3>
            <ul>
                <li>OS: Windows 10/11 (or Linux/macOS with Python)</li>
                <li>Webcam: Working webcam/camera</li>
                <li>RAM: 4GB minimum</li>
                <li>Python: 3.8 or higher</li>
            </ul>
            <h3>Installation Steps</h3>
            <ol>
                <li><strong>Clone the Repository:</strong> <code>git clone https://github.com/Meet2002045p/Air-Drawing-Using-Hand-Gesture-Recognition</code></li>
                <li><strong>Install Python 3.8+:</strong> Download from python.org (check "Add Python to PATH")</li>
                <li><strong>Install Dependencies:</strong> <code>pip install -r requirements.txt</code></li>
                <li><strong>Verify Installation (Optional):</strong> <code>python diagnose_mp.py</code></li>
                <li><strong>Run the Application:</strong> <code>python main.py</code> or double-click <code>run_app.bat</code></li>
            </ol>
            <h3>Required Dependencies</h3>
            <ul>
                <li>opencv-python - Computer vision library for image processing</li>
                <li>mediapipe - Google's MediaPipe framework for hand detection</li>
                <li>numpy - Numerical computing library</li>
            </ul>
        `,
        usage: `
            <h3>Quick Start</h3>
            <ol>
                <li>Run the application: <code>python main.py</code></li>
                <li>Allow camera access when prompted</li>
                <li>A window titled "Air Drawing" appears with your webcam feed</li>
                <li>Pinch your index and thumb fingers to start drawing</li>
                <li>Move your hand to draw on the canvas</li>
                <li>Release the pinch to stop drawing</li>
            </ol>
            <h3>Keyboard Controls</h3>
            <ul>
                <li><strong>R</strong> - Change color to Red</li>
                <li><strong>G</strong> - Change color to Green</li>
                <li><strong>B</strong> - Change color to Blue</li>
                <li><strong>Y</strong> - Change color to Yellow</li>
                <li><strong>+ or =</strong> - Increase brush thickness</li>
                <li><strong>-</strong> - Decrease brush thickness</li>
                <li><strong>S</strong> - Save drawing as PNG</li>
                <li><strong>Q</strong> - Quit application</li>
            </ul>
            <h3>Visual Feedback</h3>
            <ul>
                <li><strong>Green Circle:</strong> Drawing mode active (fingers pinched)</li>
                <li><strong>Red Circle:</strong> Hovering mode (fingers separated)</li>
                <li><strong>Red Button:</strong> Clear canvas (point index finger at it)</li>
            </ul>
        `,
        technologies: ['Python', 'OpenCV', 'MediaPipe', 'NumPy', 'Computer Vision', 'Hand Tracking', 'Gesture Recognition'],
        structure: `📂 Air-Drawing-Using-Hand-Gesture-Recognition/
├── main.py                          # Main application with hand detection & drawing logic
├── diagnose_mp.py                   # Diagnostic script to check MediaPipe setup
├── hand_landmarker.task             # Pre-trained hand detection model
├── requirements.txt                 # Python package dependencies
├── run_app.bat                      # Windows batch script to run app
├── __pycache__/                     # Python bytecode cache (auto-generated)
├── air_drawing.png                  # Output file (generated when saving)
└── README.md                        # Complete project documentation`,
        highlights: [
            'Real-time hand detection with 21-point landmark tracking',
            'Pinch gesture recognition with hysteresis logic',
            'Exponential moving average smoothing algorithm',
            'Multi-color drawing with keyboard control',
            'Adjustable brush thickness (5-50px)',
            'High-resolution support (1280x720)',
            'Transparent canvas merging with video',
            'Save drawings as PNG files',
            'Visual cursor feedback (Green/Red)',
            'Production-ready with error handling',
            'Configurable hand detection confidence',
            'Batch script for easy launch (Windows)'
        ],
        additional: `
            <h3>How It Works</h3>
            <p><strong>Hand Detection:</strong> MediaPipe Hand Landmarker detects 21 key points per hand including index finger and thumb tips.</p>
            <p><strong>Pinch Detection:</strong> Continuous distance calculation between index and thumb triggers drawing (< 30px starts, > 50px stops).</p>
            <p><strong>Smoothing:</strong> Exponential Moving Average reduces jitter: <code>smoothed = prev + (current - prev) × factor</code></p>
            <p><strong>Canvas Merging:</strong> Drawing layer blended with video feed using bitwise operations for natural appearance.</p>
            <p><strong>Built with:</strong> Pure Python computer vision demonstrating real-time hand gesture recognition and interactive drawing mechanics.</p>
        `
    }
};

// Main Function to Load Project Details
function loadProjectDetails() {
    // Get project ID from URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id') || 'data-analysis';

    // Get project data
    const project = projectsData[projectId];

    if (!project) {
        document.querySelector('.project-content').innerHTML = `
            <div class="content-section">
                <h2 class="section-subtitle">Project Not Found</h2>
                <p>Sorry, the project you're looking for doesn't exist. Please go back to the <a href="index.html#projects">projects page</a>.</p>
            </div>
        `;
        return;
    }

    // Update page title
    document.title = `${project.title} | Meet Shingala Portfolio`;

    // Update hero section
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-tagline').textContent = project.tagline;
    document.getElementById('project-year').innerHTML = `<i class="fas fa-calendar"></i> ${project.year}`;
    document.getElementById('project-status').innerHTML = `<i class="fas fa-lightbulb"></i> ${project.status}`;

    // Update buttons
    document.getElementById('github-link').href = project.github;
    document.getElementById('live-link').href = project.live;
    document.getElementById('sidebar-github').href = project.github;
    document.getElementById('sidebar-demo').href = project.live;

    // Update content sections
    document.getElementById('project-overview').innerHTML = project.overview;

    // Features
    const featuresHTML = project.features.map(feature => `
        <div class="feature-item">
            <h4>${feature.title}</h4>
            <p>${feature.description}</p>
        </div>
    `).join('');
    document.getElementById('project-features').innerHTML = featuresHTML;

    // Installation
    document.getElementById('project-installation').innerHTML = project.installation;

    // Usage
    document.getElementById('project-usage').innerHTML = project.usage;

    // Technologies
    const techHTML = project.technologies.map(tech => `
        <span class="tech-badge">${tech}</span>
    `).join('');
    document.getElementById('project-tech').innerHTML = techHTML;

    // Project Structure
    document.querySelector('.code-block pre code').textContent = project.structure;

    // Additional Info
    const additionalSection = document.getElementById('additional-section');
    if (project.additional) {
        document.getElementById('project-additional').innerHTML = project.additional;
    } else {
        additionalSection.style.display = 'none';
    }

    // Highlights
    const highlightsHTML = project.highlights.map(highlight => `
        <li>${highlight}</li>
    `).join('');
    document.getElementById('project-highlights').innerHTML = highlightsHTML;

    // Sidebar Tech Stack
    const sidebarTechHTML = project.technologies.slice(0, 5).map(tech => `
        <span class="badge">${tech}</span>
    `).join('');
    document.getElementById('sidebar-tech').innerHTML = sidebarTechHTML;

    // Scroll to top
    window.scrollTo(0, 0);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Load project details
    loadProjectDetails();

    // Add spotlight and magnetic tilt effect to project hero
    const projectHero = document.querySelector('.project-hero');
    if (projectHero) {
        projectHero.addEventListener('mousemove', (e) => {
            const rect = projectHero.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Spotlight effect
            projectHero.style.setProperty('--x', `${x}px`);
            projectHero.style.setProperty('--y', `${y}px`);
            
            // Magnetic tilt effect
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * 3;
            const rotateY = ((x - centerX) / centerX) * -3;
            
            projectHero.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        });

        projectHero.addEventListener('mouseleave', () => {
            projectHero.style.setProperty('--x', '50%');
            projectHero.style.setProperty('--y', '50%');
            projectHero.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    }

    // Add copy-to-clipboard effect for code blocks and tech items
    addCopyToClipboardEffect();
});

// Copy to Clipboard Functionality
function addCopyToClipboardEffect() {
    // Make code blocks copyable
    const codeBlocks = document.querySelectorAll('.code-block code');
    codeBlocks.forEach(block => {
        block.style.cursor = 'copy';
        block.addEventListener('click', () => copyToClipboard(block.textContent, block));
    });

    // Make tech badges copyable
    const badges = document.querySelectorAll('.badge, .tech-badge');
    badges.forEach(badge => {
        badge.style.cursor = 'copy';
        badge.addEventListener('click', () => copyToClipboard(badge.textContent.trim(), badge));
    });
}

function copyToClipboard(text, element) {
    // Copy to clipboard
    navigator.clipboard.writeText(text).then(() => {
        // Show copy feedback
        const originalText = element.textContent;
        const originalBg = element.style.backgroundColor;
        const originalColor = element.style.color;
        
        // Visual feedback
        element.style.backgroundColor = 'var(--accent-color)';
        element.style.color = 'var(--bg-color)';
        element.textContent = '✓ Copied!';
        
        // Reset after 2 seconds
        setTimeout(() => {
            element.textContent = originalText;
            element.style.backgroundColor = originalBg;
            element.style.color = originalColor;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}
