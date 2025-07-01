import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { TrendingUp, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const WorkflowAnalytics = () => {
  const [timeframe, setTimeframe] = useState('30');

  // Mock data for analytics
  const analytics = [
    {
      module: 'Student Onboarding',
      totalRequests: 320,
      approved: 290,
      pending: 20,
      rejected: 10,
      avgTime: '3.2 days'
    },
    {
      module: 'Leave Management',
      totalRequests: 180,
      approved: 150,
      pending: 20,
      rejected: 10,
      avgTime: '1.5 days'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Workflow Analytics</h1>
        <div className="flex gap-2">
          <Select value={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">Last 7 days</SelectItem>
              <SelectItem value="30">Last 30 days</SelectItem>
              <SelectItem value="90">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
          <Button>Export Report</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="flex items-center p-6">
            <TrendingUp className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Workflows</p>
              <p className="text-2xl font-bold text-gray-900">1,247</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-gray-900">1,089</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <Clock className="h-8 w-8 text-yellow-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-gray-900">124</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <AlertCircle className="h-8 w-8 text-red-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Overdue</p>
              <p className="text-2xl font-bold text-gray-900">34</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Module Performance Analysis</CardTitle>
          <CardDescription>Detailed workflow analytics by module</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {analytics.map((item, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium text-lg">{item.module}</h3>
                  <span className="text-sm text-gray-500">Avg. Processing Time: {item.avgTime}</span>
                </div>
                <div className="grid grid-cols-4 gap-4 mb-3">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">{item.totalRequests}</p>
                    <p className="text-sm text-gray-500">Total</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">{item.approved}</p>
                    <p className="text-sm text-gray-500">Approved</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-yellow-600">{item.pending}</p>
                    <p className="text-sm text-gray-500">Pending</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-red-600">{item.rejected}</p>
                    <p className="text-sm text-gray-500">Rejected</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="flex h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-green-500"
                      style={{ width: `${(item.approved / item.totalRequests) * 100}%` }}
                    ></div>
                    <div
                      className="bg-yellow-500"
                      style={{ width: `${(item.pending / item.totalRequests) * 100}%` }}
                    ></div>
                    <div
                      className="bg-red-500"
                      style={{ width: `${(item.rejected / item.totalRequests) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default WorkflowAnalytics;