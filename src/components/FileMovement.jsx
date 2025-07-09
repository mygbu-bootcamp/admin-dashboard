import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { 
  FolderOpen, 
  Send, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Eye,
  FileText,
  Users,
  TrendingUp,
  Calendar,
  Download,
  MapPin,
  Shield,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react';
import { ChartContainer, ChartTooltip } from '../components/ui/chart';
import { BarChart as ReBarChart, Bar, XAxis, YAxis, CartesianGrid, PieChart as RePieChart, Cell, LineChart, Line, ResponsiveContainer, Pie } from 'recharts';

const FileMovement = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [statusFilter, setStatusFilter] = useState('all');
  const [departmentFilter, setDepartmentFilter] = useState('all');

  const summaryStats = [
    {
      title: "Files Initiated Today",
      value: "24",
      change: "+15%",
      icon: FolderOpen,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Files Approved",
      value: "156",
      change: "+8%",
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Escalated Files",
      value: "8",
      change: "+3",
      icon: AlertTriangle,
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      title: "Pending > 3 Days",
      value: "12",
      change: "-2",
      icon: Clock,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const files = [
    {
      id: 1,
      fileNumber: 'REG/2024/001',
      subject: 'Student Admission Query - Merit List Revision',
      initiatedBy: 'Dr. Sharma (CSE)',
      currentHandler: 'Registrar Office',
      status: 'Pending',
      priority: 'High',
      daysInQueue: 5,
      createdDate: '2024-01-10',
      lastAction: '2024-01-12',
      attachments: 2,
      confidential: false,
      escalated: true,
    },
    {
      id: 2,
      fileNumber: 'ACAD/2024/015',
      subject: 'Course Curriculum Update - AI/ML Specialization',
      initiatedBy: 'Prof. Johnson (IT)',
      currentHandler: 'Dean Academic',
      status: 'In Transit',
      priority: 'Medium',
      daysInQueue: 2,
      createdDate: '2024-01-08',
      lastAction: '2024-01-11',
      attachments: 1,
      confidential: false,
      escalated: false,
    },
    {
      id: 3,
      fileNumber: 'CONF/2024/003',
      subject: 'Confidential - Faculty Evaluation Report',
      initiatedBy: 'VC Office',
      currentHandler: 'Registrar',
      status: 'Pending',
      priority: 'High',
      daysInQueue: 7,
      createdDate: '2024-01-05',
      lastAction: '2024-01-10',
      attachments: 3,
      confidential: true,
      escalated: false,
    }
  ];

  const departmentData = [
    { department: 'CSE', files: 40, approved: 30, pending: 10 },
    { department: 'IT', files: 35, approved: 28, pending: 7 },
    { department: 'ECE', files: 28, approved: 20, pending: 8 },
    { department: 'Civil', files: 22, approved: 18, pending: 4 },
    { department: 'Mech', files: 18, approved: 15, pending: 3 }
  ];

  const statusData = [
    { name: 'Approved', value: 120, color: '#10b981' },
    { name: 'Pending', value: 30, color: '#f59e0b' },
    { name: 'In Transit', value: 15, color: '#3b82f6' },
    { name: 'Escalated', value: 8, color: '#ef4444' }
  ];

  const trendData = [
    { week: 'Week 1', files: 20, completed: 15 },
    { week: 'Week 2', files: 25, completed: 20 },
    { week: 'Week 3', files: 30, completed: 25 },
    { week: 'Week 4', files: 35, completed: 30 }
  ];

  const auditTrail = [
    {
      fileNumber: 'REG/2024/001',
      action: 'Initiated',
      user: 'Dr. Sharma',
      timestamp: '2024-01-10 09:30',
      remarks: 'Urgent revision required for merit list'
    },
    {
      fileNumber: 'REG/2024/001',
      action: 'Forwarded',
      user: 'HOD CSE',
      timestamp: '2024-01-10 14:20',
      remarks: 'Approved by department, forwarding to Dean'
    },
    {
      fileNumber: 'REG/2024/001',
      action: 'Under Review',
      user: 'Dean Academic',
      timestamp: '2024-01-11 10:15',
      remarks: 'Reviewing documents and criteria'
    }
  ];

  const filteredFiles = files.filter(file => {
    const statusMatch = statusFilter === 'all' || file.status.toLowerCase() === statusFilter;
    const deptMatch = departmentFilter === 'all' || file.initiatedBy.includes(departmentFilter);
    return statusMatch && deptMatch;
  });

  const handleBulkAction = (action) => {
    console.log(`Performing bulk action: ${action}`);
  };

  const handleFileAction = (fileId, action) => {
    console.log(`File ${fileId}: ${action}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">E-Office File Movement</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button>
            <FolderOpen className="h-4 w-4 mr-2" />
            Create New File
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="inbox">File Inbox</TabsTrigger>
          <TabsTrigger value="escalated">Escalated</TabsTrigger>
          <TabsTrigger value="confidential">Confidential</TabsTrigger>
          <TabsTrigger value="audit">Audit Trail</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        {/* Dashboard Tab */}
        <TabsContent value="dashboard" className="space-y-6">
          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {summaryStats.map((stat, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="flex items-center p-6">
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <Badge variant={stat.change.startsWith('+') ? 'default' : 'secondary'} className="text-xs">
                        {stat.change}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Department-wise File Load
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{}} className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <ReBarChart data={departmentData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="department" />
                      <YAxis />
                      <ChartTooltip />
                      <Bar dataKey="files" fill="#3b82f6" />
                      <Bar dataKey="approved" fill="#10b981" />
                    </ReBarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5" />
                  File Status Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{}} className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RePieChart>
                      <Pie
                        data={statusData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label
                      >
                        {statusData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <ChartTooltip />
                    </RePieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* File Movement Trends */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                File Movement Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{}} className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <ChartTooltip />
                    <Line type="monotone" dataKey="files" stroke="#3b82f6" strokeWidth={2} />
                    <Line type="monotone" dataKey="completed" stroke="#10b981" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* File Inbox Tab */}
        <TabsContent value="inbox" className="space-y-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex-1 min-w-64">
                  <Input 
                    placeholder="Search by file number, subject, or initiator..." 
                    className="w-full"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="in transit">In Transit</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="escalated">Escalated</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="CSE">CSE</SelectItem>
                    <SelectItem value="IT">IT</SelectItem>
                    <SelectItem value="ECE">ECE</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" onClick={() => handleBulkAction('approve')}>
                  Bulk Approve
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>File Inbox ({filteredFiles.length})</CardTitle>
              <CardDescription>Manage and track all file movements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredFiles.map((file) => (
                  <div key={file.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex items-center gap-2">
                            {file.confidential && <Shield className="h-4 w-4 text-red-500" />}
                            <span className="font-medium text-lg">{file.fileNumber}</span>
                            {file.escalated && <Badge variant="destructive" className="text-xs">Escalated</Badge>}
                          </div>
                          <Badge variant={
                            file.status === 'Pending' ? 'destructive' : 
                            file.status === 'In Transit' ? 'default' : 'secondary'
                          }>
                            {file.status}
                          </Badge>
                          <Badge variant={file.priority === 'High' ? 'destructive' : 'outline'}>
                            {file.priority}
                          </Badge>
                        </div>
                        <h3 className="font-medium text-gray-900 mb-1">{file.subject}</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-3">
                          <div>
                            <span className="font-medium">Initiated by:</span>
                            <br />{file.initiatedBy}
                          </div>
                          <div>
                            <span className="font-medium">Current Handler:</span>
                            <br />{file.currentHandler}
                          </div>
                          <div>
                            <span className="font-medium">Days in Queue:</span>
                            <br />
                            <span className={file.daysInQueue > 3 ? 'text-red-600 font-medium' : ''}>
                              {file.daysInQueue} days
                            </span>
                          </div>
                          <div>
                            <span className="font-medium">Attachments:</span>
                            <br />{file.attachments} files
                          </div>
                        </div>
                        <div className="text-xs text-gray-500">
                          Created: {file.createdDate} | Last action: {file.lastAction}
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 ml-4">
                        <Button 
                          size="sm" 
                          onClick={() => handleFileAction(file.id, 'view')}
                          variant="outline"
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button 
                          size="sm"
                          onClick={() => handleFileAction(file.id, 'approve')}
                        >
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleFileAction(file.id, 'forward')}
                        >
                          <Send className="h-4 w-4 mr-1" />
                          Forward
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Escalated Tab */}
        <TabsContent value="escalated" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-red-600 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Escalated Files - Immediate Action Required
              </CardTitle>
              <CardDescription>
                Files that have exceeded SLA timelines and require urgent attention
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {files.filter(file => file.escalated).map((file) => (
                  <div key={file.id} className="border-l-4 border-red-500 bg-red-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-bold text-red-700">{file.fileNumber}</span>
                          <Badge variant="destructive">Escalated - {file.daysInQueue} days</Badge>
                        </div>
                        <h3 className="font-medium text-gray-900">{file.subject}</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Initiated by: {file.initiatedBy} | Current Handler: {file.currentHandler}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="destructive">
                          Urgent Action
                        </Button>
                        <Button size="sm" variant="outline">
                          Reassign
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Confidential Tab */}
        <TabsContent value="confidential" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-red-600" />
                Confidential Files
              </CardTitle>
              <CardDescription>
                Restricted access files requiring special authorization
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {files.filter(file => file.confidential).map((file) => (
                  <div key={file.id} className="border-l-4 border-yellow-500 bg-yellow-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="h-4 w-4 text-red-500" />
                          <span className="font-bold">{file.fileNumber}</span>
                          <Badge variant="outline">Confidential</Badge>
                        </div>
                        <h3 className="font-medium text-gray-900">{file.subject}</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Access Level, Registrar Only
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          Request Access
                        </Button>
                        <Button size="sm">
                          View with OTP
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Audit Trail Tab */}
        <TabsContent value="audit" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Audit Trail
              </CardTitle>
              <CardDescription>
                Complete file movement history and action logs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {auditTrail.map((entry, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{entry.fileNumber}</span>
                        <Badge variant="outline">{entry.action}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{entry.remarks}</p>
                      <div className="text-xs text-gray-500">
                        By {entry.user} on {entry.timestamp}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Average Completion Time by Department</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {departmentData.map((dept) => (
                    <div key={dept.department} className="flex items-center justify-between">
                      <span className="font-medium">{dept.department}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${(dept.approved / dept.files) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-600">
                          {Math.round((dept.approved / dept.files) * 100)}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>File Processing Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <p className="text-2xl font-bold text-green-600">2.3</p>
                      <p className="text-sm text-gray-600">Avg. Days</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600">94%</p>
                      <p className="text-sm text-gray-600">Success Rate</p>
                    </div>
                  </div>
                  <Button className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Generate Weekly Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FileMovement;