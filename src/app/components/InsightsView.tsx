import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { insightsData } from '../data/mockData';

export function InsightsView() {
  const COLORS = ['#0078D4', '#50E6FF', '#00BCF2', '#00B7C3'];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="grid grid-cols-3 gap-6">
        <Card className="shadow-sm">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Hypotheses Improved</p>
              <p className="text-4xl font-bold text-[#0078D4]">{insightsData.hypothesesImproved}%</p>
              <p className="text-xs text-gray-500 mt-2">Post-review improvement rate</p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Avg. Turnaround Time</p>
              <p className="text-4xl font-bold text-[#0078D4]">8 hrs</p>
              <p className="text-xs text-gray-500 mt-2">From request to review</p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Active Domain Experts</p>
              <p className="text-4xl font-bold text-[#0078D4]">24</p>
              <p className="text-xs text-gray-500 mt-2">Contributing to review</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Confidence Score Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={insightsData.confidenceDistribution}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="range" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#0078D4" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Most Common Feasibility Issues</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={insightsData.commonIssues}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {insightsData.commonIssues.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Average Turnaround Time Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={insightsData.turnaroundTime}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" />
              <YAxis label={{ value: 'Hours', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="hours" 
                stroke="#0078D4" 
                strokeWidth={3}
                dot={{ fill: '#0078D4', r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-600 mt-4 text-center">
            Continuous improvement in review turnaround time demonstrates enhanced domain expert engagement
          </p>
        </CardContent>
      </Card>
    </div>
  );
}