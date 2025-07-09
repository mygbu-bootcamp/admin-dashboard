import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { GraduationCap, CheckCircle, AlertCircle, Clock } from 'lucide-react';

const DegreeAudit = () => {
  const students = [
    {
      id: 1,
      name: 'John Doe',
      rollNo: 'CS2020001',
      program: 'B.Tech CSE',
      creditsCompleted: 160,
      creditsRequired: 160,
      status: 'eligible',
      cgpa: 8.5
    },
    {
      id: 2,
      name: 'Jane Smith',
      rollNo: 'CS2020002',
      program: 'B.Tech CSE',
      creditsCompleted: 150,
      creditsRequired: 160,
      status: 'pending',
      cgpa: 7.8
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Degree Audit</h1>
        <Button>Generate Degree List</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="flex items-center p-6">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Students</p>
              <p className="text-2xl font-bold text-gray-900">156</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Eligible</p>
              <p className="text-2xl font-bold text-gray-900">124</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <AlertCircle className="h-8 w-8 text-red-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Not Eligible</p>
              <p className="text-2xl font-bold text-gray-900">18</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <Clock className="h-8 w-8 text-yellow-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Under Review</p>
              <p className="text-2xl font-bold text-gray-900">14</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Student Degree Eligibility</CardTitle>
          <CardDescription>
            Review and approve degree eligibility for graduating students
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input placeholder="Search by roll number or name..." className="max-w-sm" />
            <div className="space-y-2">
              {students.map((student) => (
                <div key={student.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="font-medium">{student.name}</p>
                      <p className="text-sm text-gray-500">{student.rollNo} - {student.program}</p>
                    </div>
                    <div className="text-sm">
                      <p>Credits: {student.creditsCompleted}/{student.creditsRequired}</p>
                      <p>CGPA: {student.cgpa}</p>
                    </div>
                    <Badge variant={
                      student.status === 'eligible' ? 'default' :
                      student.status === 'pending' ? 'secondary' : 'destructive'
                    }>
                      {student.status}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline">View Details</Button>
                    <Button size="sm">Approve</Button>
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

export default DegreeAudit;