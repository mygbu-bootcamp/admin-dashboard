import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import { BookOpen, User, Clock, CheckCircle } from 'lucide-react';

const CourseMapping = () => {
  const [activeTab, setActiveTab] = useState('mapping');

  const courseMappings = [
    {
      id: 1,
      course: 'Data Structures',
      code: 'CS301',
      faculty: 'Dr. Smith',
      credits: 4,
      status: 'approved',
      semester: 'III'
    },
    {
      id: 2,
      course: 'Database Management',
      code: 'CS302',
      faculty: 'Prof. Johnson',
      credits: 3,
      status: 'pending',
      semester: 'III'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Course Mapping</h1>
        <Button>Add New Mapping</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="flex items-center p-6">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Courses</p>
              <p className="text-2xl font-bold text-gray-900">156</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <User className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Mapped Faculty</p>
              <p className="text-2xl font-bold text-gray-900">89</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <Clock className="h-8 w-8 text-yellow-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <CheckCircle className="h-8 w-8 text-purple-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Approved</p>
              <p className="text-2xl font-bold text-gray-900">144</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Course Mappings</CardTitle>
          <CardDescription>Manage course-faculty mappings and approvals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 ">
            <div className="flex gap-4  ">
              <Input placeholder="Search courses..." className="max-w-sm" />
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select School" />
                </SelectTrigger>
             <SelectContent>
  <SelectItem value="cse" className="bg-white hover:bg-gray-100">Computer Science</SelectItem>
  <SelectItem value="ece" className="bg-white hover:bg-gray-100">Electronics</SelectItem>
  <SelectItem value="mech" className="bg-white hover:bg-gray-100">Mechanical</SelectItem>
</SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              {courseMappings.map((mapping) => (
                <div key={mapping.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="font-medium">{mapping.course}</p>
                      <p className="text-sm text-gray-500">{mapping.code} - Semester {mapping.semester}</p>
                    </div>
                    <Badge variant="outline">{mapping.credits} Credits</Badge>
                    <Badge variant={mapping.status === 'approved' ? 'default' : 'secondary'}>
                      {mapping.status}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">{mapping.faculty}</span>
                    <Button size="sm" variant="outline">Edit</Button>
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

export default CourseMapping;