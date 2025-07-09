import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { BarChart3, FileText, TrendingUp, Award } from 'lucide-react';

const IQACModule = () => {
  const reports = [
    {
      id: 1,
      title: 'NAAC Self Study Report 2024',
      type: 'NAAC',
      status: 'In Progress',
      deadline: '2024-03-15',
      completeness: 65
    },
    {
      id: 2,
      title: 'NIRF Data Collection 2024',
      type: 'NIRF',
      status: 'Completed',
      deadline: '2024-02-28',
      completeness: 100
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">IQAC/NAAC/NIRF</h1>
        <Button>Generate Report</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="flex items-center p-6">
            <BarChart3 className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">NAAC Grade</p>
              <p className="text-2xl font-bold text-gray-900">A+</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <TrendingUp className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">NIRF Ranking</p>
              <p className="text-2xl font-bold text-gray-900">156</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <FileText className="h-8 w-8 text-yellow-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Reports Due</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <Award className="h-8 w-8 text-purple-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Accreditations</p>
              <p className="text-2xl font-bold text-gray-900">5</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quality Assurance Reports</CardTitle>
          <CardDescription>Manage NAAC, NIRF, and other quality assessment reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input placeholder="Search reports..." className="max-w-sm" />
            <div className="space-y-2">
              {reports.map((report) => (
                <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="font-medium">{report.title}</p>
                      <p className="text-sm text-gray-500">Deadline: {report.deadline}</p>
                    </div>
                    <Badge variant="outline">{report.type}</Badge>
                    <Badge variant={
                      report.status === 'Completed' ? 'default' : 
                      report.status === 'In Progress' ? 'secondary' : 'destructive'
                    }>
                      {report.status}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right text-sm">
                      {report.completeness}% Complete
                      <div className="w-24 bg-gray-200 rounded-full h-2 mt-1">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${report.completeness}%` }}
                        ></div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">Edit</Button>
                    <Button size="sm">Submit</Button>
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

export default IQACModule;