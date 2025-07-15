
import React from 'react';

const StatCard = ({ title, value, change, changeType }: { title: string, value: string, change: string, changeType: 'up' | 'down' }) => (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h3 className="text-sm text-gray-400">{title}</h3>
        <p className="text-2xl font-bold text-white">{value}</p>
        <p className={`text-sm flex items-center ${changeType === 'up' ? 'text-green-400' : 'text-red-400'}`}>
            {changeType === 'up' ? 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" /></svg> :
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7" /></svg>
            }
            {change}
        </p>
    </div>
);

const AgiTrainer = () => {
  return (
    <div className="h-full w-full flex flex-col bg-gray-900 text-white overflow-y-auto p-4 md:p-6 space-y-6">
      {/* Header Controls */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400">Training Dashboard: AGI_Omega_v7</h1>
        <div className="flex space-x-2">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">STOP TRAINING</button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">PAUSE</button>
        </div>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Overall Loss" value="0.0134" change="-2.5%" changeType="down" />
          <StatCard title="Accuracy" value="99.87%" change="+0.1%" changeType="up" />
          <StatCard title="Epoch" value="42 / 100" change="3h remaining" changeType="up" />
          <StatCard title="Cluster Utilization" value="98.5%" change="-0.2%" changeType="down" />
      </div>

      {/* Main Content Area */}
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Panel: Visualizations */}
        <div className="lg:col-span-2 bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col">
            <h2 className="text-lg font-bold mb-4">Live Metrics</h2>
            <div className="flex-grow bg-gray-900 rounded-md p-2 relative">
                <p className="absolute top-2 left-2 text-xs text-gray-500">Loss vs. Epoch (Live)</p>
                {/* Placeholder for a chart */}
                <div className="w-full h-full border-2 border-dashed border-gray-700 rounded-md flex items-center justify-center">
                    <p className="text-gray-600">Live Chart Visualization Area</p>
                </div>
            </div>
            <div className="flex-grow bg-gray-900 rounded-md p-2 mt-4 relative">
                <p className="absolute top-2 left-2 text-xs text-gray-500">Synthetic Data Generation Rate</p>
                <div className="w-full h-full border-2 border-dashed border-gray-700 rounded-md flex items-center justify-center">
                    <p className="text-gray-600">Data Rate Monitor</p>
                </div>
            </div>
        </div>

        {/* Right Panel: Controls & Logs */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col space-y-4">
          <div>
            <h2 className="text-lg font-bold mb-2">Training Pipeline Control</h2>
            <div className="space-y-2 text-sm">
                <p><span className="font-semibold text-cyan-400">Dataset:</span> ImageNet-100K + Custom Synthetic</p>
                <p><span className="font-semibold text-cyan-400">Curriculum:</span> Stage 3 - Adversarial Hardening</p>
                <p><span className="font-semibold text-cyan-400">Optimizer:</span> AdamW + Lookahead</p>
            </div>
          </div>
          <div className="flex-grow flex flex-col">
            <h2 className="text-lg font-bold mb-2">Training Log</h2>
            <div className="flex-grow bg-black font-mono text-xs p-2 rounded-md overflow-y-auto">
                <p><span className="text-green-400">[INFO]</span> Epoch 42 started. Learning rate: 1e-5.</p>
                <p><span className="text-green-400">[INFO]</span> Step 1200/2500, Loss: 0.0138</p>
                <p><span className="text-yellow-400">[WARN]</span> Anomaly detected in dataset batch #8921. Confidence: 85%. Isolating...</p>
                <p><span className="text-green-400">[INFO]</span> Step 1201/2500, Loss: 0.0135</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgiTrainer;
