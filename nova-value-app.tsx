import React, { useState, useEffect } from 'react';
import { ChevronRight, Upload } from 'lucide-react';
import Papa from 'papaparse';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  BarChart,
  Bar
} from 'recharts';

const NovaValueApp = () => {
  // State
  const [companyName, setCompanyName] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageTransition, setPageTransition] = useState(false);
  const [formData, setFormData] = useState({
    industry: '',
    dataInputMethod: '',
    metrics: {
      awareness: {
        impressions: '',
        reach: '',
        sessions: '',
        uniqueVisitors: '',
        likes: '',
        shares: ''
      },
      engagement: {
        clickThroughRate: '',
        timeOnPage: '',
        bounceRate: '',
        socialMediaInteractions: ''
      },
      consideration: {
        leadMagnetConversion: '',
        addToCartRate: '',
        emailClickThroughRates: ''
      },
      conversion: {
        salesRevenue: '',
        costPerAcquisition: '',
        customerAcquisitionCost: ''
      },
      retention: {
        repeatPurchaseRate: '',
        customerLifetimeValue: '',
        churnRate: ''
      }
    }
  });

  // Page transition function
  const changePage = (newPage) => {
    setPageTransition(true);
    setTimeout(() => {
      setCurrentPage(newPage);
      setPageTransition(false);
    }, 300);
  };

  // Metric definitions
  const awarenessMetrics = [
    { name: 'impressions', label: 'Impressions', placeholder: 'e.g., 1000000' },
    { name: 'reach', label: 'Reach', placeholder: 'e.g., 500000' },
    { name: 'sessions', label: 'Sessions', placeholder: 'e.g., 100000' },
    { name: 'uniqueVisitors', label: 'Unique Visitors', placeholder: 'e.g., 75000' },
    { name: 'likes', label: 'Likes', placeholder: 'e.g., 50000' },
    { name: 'shares', label: 'Shares', placeholder: 'e.g., 5000' }
  ];

  const engagementMetrics = [
    { name: 'clickThroughRate', label: 'Click-Through Rate (%)', placeholder: 'e.g., 1.5' },
    { name: 'timeOnPage', label: 'Time on Page (seconds)', placeholder: 'e.g., 150' },
    { name: 'bounceRate', label: 'Bounce Rate (%)', placeholder: 'e.g., 45' },
    { name: 'socialMediaInteractions', label: 'Social Media Interactions', placeholder: 'e.g., 70000' }
  ];

  const considerationMetrics = [
    { name: 'leadMagnetConversion', label: 'Lead Magnet Conversion Rate (%)', placeholder: 'e.g., 5' },
    { name: 'addToCartRate', label: 'Add-to-Cart Rate (%)', placeholder: 'e.g., 7' },
    { name: 'emailClickThroughRates', label: 'Email Click-Through Rates (%)', placeholder: 'e.g., 2.5' }
  ];

  const conversionMetrics = [
    { name: 'salesRevenue', label: 'Sales Revenue ($)', placeholder: 'e.g., 1000000' },
    { name: 'costPerAcquisition', label: 'Cost Per Acquisition ($)', placeholder: 'e.g., 37' },
    { name: 'customerAcquisitionCost', label: 'Customer Acquisition Cost ($)', placeholder: 'e.g., 60' }
  ];

  const retentionMetrics = [
    { name: 'repeatPurchaseRate', label: 'Repeat Purchase Rate (%)', placeholder: 'e.g., 25' },
    { name: 'customerLifetimeValue', label: 'Customer Lifetime Value ($)', placeholder: 'e.g., 1500' },
    { name: 'churnRate', label: 'Churn Rate (%)', placeholder: 'e.g., 10' }
  ];

  // Components
  const ValueCreationInsightsPage = () => {
    const metricScores = {
      strengths: [
        { metric: 'Add-to-cart rate', value: '7.5%', benchmark: '7%', impact: 'Direct revenue driver' },
        { metric: 'Customer retention', value: '85%', benchmark: '75%', impact: 'Lifetime value growth' }
      ],
      weaknesses: [
        { metric: 'CPA', value: '$42', benchmark: '$37', impact: 'Margin reduction' },
        { metric: 'Email open rate', value: '18%', benchmark: '20%', impact: 'Engagement loss' }
      ],
      opportunities: [
        {
          title: "Reduce Customer Acquisition Cost",
          action: "Implement lookalike audience targeting",
          impact: "Potential 15% CPA reduction",
          timeline: "90 days"
        },
        {
          title: "Improve Email Performance",
          action: "Launch A/B testing program",
          impact: "Expected 25% open rate increase",
          timeline: "60 days"
        },
        {
          title: "Scale High-ROI Channels",
          action: "Increase budget for top-performing campaigns",
          impact: "Projected 20% revenue growth",
          timeline: "120 days"
        }
      ]
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            {/* Header */}
            <div className="mb-8 border-b pb-6">
              <h1 className="text-3xl font-bold text-indigo-900 mb-3">
                {companyName}'s Value Creation Insights
              </h1>
              <p className="text-xl text-gray-600">
                Potential for 5% EBITDA growth through marketing optimization
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Strengths */}
              <div className="bg-green-50 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-green-800 mb-4">
                  Key Strengths
                </h2>
                <div className="space-y-4">
                  {metricScores.strengths.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="font-medium">{item.metric}</p>
                        <p className="text-sm text-gray-600">
                          {item.value} vs benchmark {item.benchmark}
                        </p>
                        <p className="text-sm text-green-700">{item.impact}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weaknesses */}
              <div className="bg-red-50 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-red-800 mb-4">
                  Areas for Improvement
                </h2>
                <div className="space-y-4">
                  {metricScores.weaknesses.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="font-medium">{item.metric}</p>
                        <p className="text-sm text-gray-600">
                          {item.value} vs benchmark {item.benchmark}
                        </p>
                        <p className="text-sm text-red-700">{item.impact}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Plan */}
            <div className="bg-indigo-50 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-indigo-900 mb-4">
                90-Day Value Creation Plan
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {metricScores.opportunities.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-semibold mb-3">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-indigo-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{item.action}</p>
                    <p className="text-sm font-medium text-indigo-600">{item.impact}</p>
                    <p className="text-sm text-gray-500">Timeline: {item.timeline}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <button
                onClick={() => changePage(10)}
                className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Back to Analysis
              </button>
              <button
                onClick={() => changePage(1)}
                className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Start Over
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const AnalysisPage = () => {
    const scatterData = [
      { cpa: 25, aov: 150 }, { cpa: 30, aov: 200 }, { cpa: 35, aov: 180 },
      { cpa: 40, aov: 250 }, { cpa: 45, aov: 300 }, { cpa: 50, aov: 280 },
      { cpa: 55, aov: 350 }, { cpa: 60, aov: 400 }, { cpa: 65, aov: 380 }
    ];

    const funnelData = [
      { name: 'Lead Magnet Signups', value: 1000 },
      { name: 'Email Engagement', value: 750 },
      { name: 'Add to Cart', value: 300 }
    ];

    const channelData = [
      { channel: 'Paid Ads', ctr: 2.5 },
      { channel: 'Email', ctr: 3.8 },
      { channel: 'Organic Search', ctr: 1.9 }
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-indigo-900 mb-6">Analysis Results for {companyName}</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* AOV vs CPA Scatter Plot with Metrics */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">AOV vs CPA Analysis</h2>
              <div className="h-64">
                <ResponsiveContainer>
                  <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                    <CartesianGrid />
                    <XAxis type="number" dataKey="cpa" name="CPA" unit="$" />
                    <YAxis type="number" dataKey="aov" name="AOV" unit="$" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter name="Customers" data={scatterData} fill="#8884d8" />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">Your Metrics vs. Industry Benchmarks</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Average Order Value</p>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">$320</span>
                      <span className="text-sm text-gray-500">vs $350</span>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Cost Per Acquisition</p>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">$42</span>
                      <span className="text-sm text-gray-500">vs $37</span>
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Funnel Chart with Metrics */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Conversion Funnel</h2>
              <div className="h-64">
                <ResponsiveContainer>
                  <BarChart
                    data={funnelData}
                    layout="vertical"
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Bar dataKey="value" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">Your Metrics vs. Industry Benchmarks</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Lead Magnet Conversion</p>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">4%</span>
                      <span className="text-sm text-gray-500">vs 5%</span>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Add-to-Cart Rate</p>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">7.5%</span>
                      <span className="text-sm text-gray-500">vs 7%</span>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTR Bar Chart with Metrics */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">CTR by Channel</h2>
              <div className="h-64">
                <ResponsiveContainer>
                  <BarChart data={channelData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="channel" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="ctr" fill="#8884d8" name="CTR %" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">Your Metrics vs. Industry Benchmarks</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Email Open Rate</p>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">18%</span>
                      <span className="text-sm text-gray-500">vs 20%</span>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email CTR</p>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">2.1%</span>
                      <span className="text-sm text-gray-500">vs 2.5%</span>
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => changePage(9)}
              className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Back
            </button>
            <button
              onClick={() => changePage(11)}
              className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              View Value Creation Plan
            </button>
          </div>
        </div>
      </div>
    );
  };

  const ScoringProgressPage = () => {
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState('Initializing analysis...');

    useEffect(() => {
      const statuses = [
        'Initializing analysis...',
        'Processing metrics...',
        'Comparing with industry benchmarks...',
        'Generating insights...',
        'Preparing visualization...'
      ];

      let currentStatus = 0;
      const statusInterval = setInterval(() => {
        if (currentStatus < statuses.length - 1) {
          currentStatus++;
          setStatus(statuses[currentStatus]);
        }
      }, 1500);

      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            clearInterval(statusInterval);
            setTimeout(() => changePage(10), 500);
            return 100;
          }
          return prev + 2;
        });
      }, 100);

      return () => {
        clearInterval(progressInterval);
        clearInterval(statusInterval);
      };
    }, []);

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
        <div className="w-full max-w-md text-center">
          {/* Animated logo */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto relative">
              <div className="absolute inset-0">
                <div className="w-24 h-24 border-8 border-indigo-200 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute inset-0">
                <div 
                  className="w-24 h-24 border-8 border-indigo-600 rounded-full animate-spin"
                  style={{
                    borderRightColor: 'transparent',
                    borderBottomColor: 'transparent',
                    animationDuration: '1.5s'
                  }}
                ></div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-indigo-900 mb-4">Analyzing Your Marketing Data</h2>
          <p className="text-gray-600 mb-8">{status}</p>

          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div 
              className="bg-indigo-600 h-full rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <p className="text-sm text-gray-500">{progress}% Complete</p>

          {/* Processing details */}
          <div className="mt-8 space-y-2 text-left bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center text-sm text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span>Metrics processed</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span>Industry benchmarks loaded</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <div className={`w-2 h-2 ${progress > 50 ? 'bg-green-500' : 'bg-gray-300'} rounded-full mr-2`}></div>
              <span>Generating insights</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <div className={`w-2 h-2 ${progress > 75 ? 'bg-green-500' : 'bg-gray-300'} rounded-full mr-2`}></div>
              <span>Preparing visualizations</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const PreviewInsightsPage = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-indigo-900 mb-6">Preview of Your Value Creation Analysis</h1>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-indigo-900">Sample Insights</h2>
              <p className="text-gray-600 mt-2">We identify opportunities to grow EBITDA by optimizing your marketing ROI</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium text-green-600">Potential Strengths</h3>
                <ul className="mt-2 text-sm space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    High add-to-cart rate
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Strong customer retention
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-red-600">Areas to Improve</h3>
                <ul className="mt-2 text-sm space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    Customer acquisition cost
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                    Email engagement rates
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-indigo-900">Sample Recommendations</h3>
              <ul className="mt-2 text-sm space-y-2">
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                  Optimize ad targeting to reduce CPA by 15%
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                  Improve email open rates through A/B testing
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 italic">This is a preview. Your actual insights will be based on your data.</p>
        
        <div className="flex justify-between mt-6">
          <button
            onClick={() => changePage(2)}
            className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Back
          </button>
          <button
            onClick={() => changePage(4)}
            className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Start Entering Data
          </button>
        </div>
      </div>
    </div>
  );

  const MetricInputField = ({ label, value, onChange, placeholder }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type="number"
        value={value || ''}
        onChange={(e) => onChange(parseFloat(e.target.value) || '')}
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
  );

  const MetricPage = ({ title, metrics, category }) => {
    const handleMetricChange = (metricName, value) => {
      setFormData(prevData => ({
        ...prevData,
        metrics: {
          ...prevData.metrics,
          [category]: {
            ...prevData.metrics[category],
            [metricName]: value
          }
        }
      }));
    };

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
        <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-indigo-900 mb-6">{title}</h1>
          <div className="space-y-6">
            {metrics.map(({ name, label, placeholder }) => (
              <MetricInputField
                key={name}
                label={label}
                value={formData.metrics[category][name]}
                onChange={(value) => handleMetricChange(name, value)}
                placeholder={placeholder}
              />
            ))}
            <div className="flex justify-between mt-8">
              <button
                onClick={() => changePage(currentPage - 1)}
                className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Back
              </button>
              <button
                onClick={() => changePage(currentPage + 1)}
                className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                {currentPage === 8 ? 'View Analysis' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className={`transition-opacity duration-300 ${pageTransition ? 'opacity-0' : 'opacity-100'}`}>
        {currentPage === 1 && (
          <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
            <h1 className="text-4xl font-bold text-indigo-900 mb-4">Welcome to NovaValue</h1>
            <p className="text-xl text-gray-700 mb-8">Let's analyze your marketing data</p>
            <div className="w-full max-w-md">
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Enter your company name"
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button
                onClick={() => changePage(2)}
                disabled={!companyName.trim()}
                className="mt-6 w-full bg-indigo-600 text-white py-4 px-6 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Get Started
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        )}

        {currentPage === 2 && (
          <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
            <h1 className="text-3xl font-bold text-indigo-900 mb-6">
              What industry is {companyName} in?
            </h1>
            <div className="w-full max-w-md">
              <select
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.industry}
                onChange={(e) => {
                  setFormData({ ...formData, industry: e.target.value });
                  if (e.target.value) {
                    setTimeout(() => changePage(3), 300);
                  }
                }}
              >
                <option value="">Select an industry</option>
                <option value="finance">Finance</option>
                <option value="healthcare">Healthcare and Life Sciences</option>
                <option value="retail">Retail</option>
                <option value="technology">Technology</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        )}

        {currentPage === 3 && <PreviewInsightsPage />}
        {currentPage === 4 && <MetricPage title="Awareness Metrics" metrics={awarenessMetrics} category="awareness" />}
        {currentPage === 5 && <MetricPage title="Engagement Metrics" metrics={engagementMetrics} category="engagement" />}
        {currentPage === 6 && <MetricPage title="Consideration Metrics" metrics={considerationMetrics} category="consideration" />}
        {currentPage === 7 && <MetricPage title="Conversion Metrics" metrics={conversionMetrics} category="conversion" />}
        {currentPage === 8 && <MetricPage title="Retention Metrics" metrics={retentionMetrics} category="retention" />}
        {currentPage === 9 && <ScoringProgressPage />}
        {currentPage === 10 && <AnalysisPage />}
        {currentPage === 11 && <ValueCreationInsightsPage />}
        {currentPage === 12 && <InsightsPage />}
      </div>
    </div>
  );
};

export default NovaValueApp;