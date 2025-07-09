import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Clock, Users, AlertTriangle, CheckCircle } from 'lucide-react';

const BiometricLogs = () => {
  const logs = [
    {
      id: 1,
      employee: 'Dr. John Smith',
      empId: 'EMP001',
      checkIn: '09:15 AM',
      checkOut: '06:30 PM',
      hours: '9h 15m',
      status: 'Present',
      date: '2024-01-15'
    },
    {
      id: 2,
      employee: 'Prof. Jane Doe',
      empId: 'EMP002',
      checkIn: '10:30 AM',
      checkOut: '04:00 PM',
      hours: '5h 30m',
      status: 'Short Hours',
      date: '2024-01-15'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Biometric Logs</h1>
        <Button>Export Report</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="flex items-center p-6">
            <Users className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Present Today</p>
              <p className="text-2xl font-bold text-gray-900">156</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <AlertTriangle className="h-8 w-8 text-red-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Absent</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <Clock className="h-8 w-8 text-yellow-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Late Arrivals</p>
              <p className="text-2xl font-bold text-gray-900">8</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Full Hours</p>
              <p className="text-2xl font-bold text-gray-900">142</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Attendance Logs</CardTitle>
          <CardDescription>Monitor employee attendance and working hours</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-4 flex-wrap">
              <Input placeholder="Search by employee name or ID..." className="max-w-sm" />
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cse">Computer Science</SelectItem>
                  <SelectItem value="ece">Electronics</SelectItem>
                  <SelectItem value="mech">Mechanical</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="present">Present</SelectItem>
                  <SelectItem value="absent">Absent</SelectItem>
                  <SelectItem value="late">Late</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              {logs.map((log) => (
                <div key={log.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="font-medium">{log.employee}</p>
                      <p className="text-sm text-gray-500">{log.empId} - {log.date}</p>
                    </div>
                    <div className="text-sm ml-8">
                      <p>In: {log.checkIn}</p>
                      <p>Out: {log.checkOut}</p>
                    </div>
                    <Badge variant="outline">{log.hours}</Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={
                      log.status === 'Present' ? 'default' :
                      log.status === 'Short Hours' ? 'secondary' : 'destructive'
                    }>
                      {log.status}
                    </Badge>
                    <Button size="sm" variant="outline">Details</Button>
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
export default BiometricLogs;