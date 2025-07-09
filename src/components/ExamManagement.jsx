import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Calendar, Clock, Users, FileText } from 'lucide-react';

const ExamManagement = () => {
  const [activeTab, setActiveTab] = useState('schedule');

  const examSchedules = [
    {
      id: 1,
      course: 'Data Structures',
      date: '2024-01-15',
      time: '10:00 AM',
      duration: '3 hours',
      hall: 'Hall A',
      students: 120,
      invigilators: ['Dr. Smith', 'Prof. Johnson']
    },
    {
      id: 2,
      course: 'Database Management',
      date: '2024-01-16',
      time: '2:00 PM',
      duration: '3 hours',
      hall: 'Hall B',
      students: 110,
      invigilators: ['Dr. Brown', 'Prof. Davis']
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Exam Management</h1>
        <Button>Schedule New Exam</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="flex items-center p-6">
            <Calendar className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Scheduled Exams</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <Clock className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Ongoing</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <Users className="h-8 w-8 text-yellow-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Students</p>
              <p className="text-2xl font-bold text-gray-900">1,247</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <FileText className="h-8 w-8 text-purple-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Answer Sheets</p>
              <p className="text-2xl font-bold text-gray-900">892</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Exam Schedule</CardTitle>
          <CardDescription>Manage exam schedules and seating arrangements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {examSchedules.map((exam) => (
              <div key={exam.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div>
                    <p className="font-medium">{exam.course}</p>
                    <p className="text-sm text-gray-500">{exam.date} at {exam.time}</p>
                  </div>
                  <Badge variant="outline">{exam.duration}</Badge>
                  <Badge variant="secondary">{exam.hall}</Badge>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm font-medium">{exam.students} students</p>
                    <p className="text-xs text-gray-500">{exam.invigilators.join(', ')}</p>
                  </div>
                  <Button size="sm" variant="outline">Manage</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExamManagement;