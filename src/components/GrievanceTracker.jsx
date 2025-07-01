import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { MessageSquare, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

const GrievanceTracker = () => {
  const grievances = [
    {
      id: 1,
      title: 'Library Access Issue',
      category: 'Academic',
      priority: 'High',
      status: 'Open',
      submittedBy: 'John Doe',
      date: '2024-01-10',
      school: 'Engineering'
    },
    {
      id: 2,
      title: 'Hostel Maintenance',
      category: 'Infrastructure',
      priority: 'Medium',
      status: 'In Progress',
      submittedBy: 'Jane Smith',
      date: '2024-01-08',
      school: 'Management'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Grievance Tracker</h1>
        <Button>New Grievance</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="flex items-center p-6">
            <MessageSquare className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Grievances</p>
              <p className="text-2xl font-bold text-gray-900">47</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <AlertTriangle className="h-8 w-8 text-red-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">High Priority</p>
              <p className="text-2xl font-bold text-gray-900">8</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <Clock className="h-8 w-8 text-yellow-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">In Progress</p>
              <p className="text-2xl font-bold text-gray-900">15</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Resolved</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Grievance Management</CardTitle>
          <CardDescription>Track and resolve student and faculty grievances</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-4">
              <Input placeholder="Search grievances..." className="max-w-sm" />
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="progress">In Progress</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              {grievances.map((grievance) => (
                <div key={grievance.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="font-medium">{grievance.title}</p>
                      <p className="text-sm text-gray-500">By {grievance.submittedBy} - {grievance.date}</p>
                    </div>
                    <Badge variant="outline">{grievance.category}</Badge>
                    <Badge variant={
                      grievance.priority === 'High' ? 'destructive' : 
                      grievance.priority === 'Medium' ? 'default' : 'secondary'
                    }>
                      {grievance.priority}
                    </Badge>
                    <Badge variant={
                      grievance.status === 'Open' ? 'destructive' : 
                      grievance.status === 'In Progress' ? 'default' : 'secondary'
                    }>
                      {grievance.status}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">{grievance.school}</span>
                    <Button size="sm" variant="outline">View</Button>
                    <Button size="sm">Resolve</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default GrievanceTracker;