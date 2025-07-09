import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import {
  GraduationCap,
  Upload,
  CheckCircle,
  Clock,
  UserPlus,
  Mail,
  IdCard,
  FileText,
  Home,
  Bus,
  CreditCard
} from 'lucide-react';
import { GBU_SCHOOLS } from '../data/gbuMasterData';

const StudentOnboarding = () => {
  const [selectedSchool, setSelectedSchool] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('');

  const onboardingSteps = [
    { id: 1, name: 'Admission Verification', icon: FileText, completed: true },
    { id: 2, name: 'Document Upload', icon: Upload, completed: true },
    { id: 3, name: 'Hostel Allocation', icon: Home, completed: false },
    { id: 4, name: 'Transport Allocation', icon: Bus, completed: false },
    { id: 5, name: 'ID Card Generation', icon: IdCard, completed: false },
    { id: 6, name: 'Welcome Package', icon: Mail, completed: false }
  ];

  const recentAdmissions = [
    {
      id: 1,
      name: 'Aarav Sharma',
      rollNo: 'GBU2024001',
      program: 'B.Tech CSE',
      school: 'SoICT',
      status: 'In Progress',
      step: 3,
      email: 'aarav.sharma@gbu.ac.in',
      phone: '+91 9876543210'
    },
    {
      id: 2,
      name: 'Priya Patel',
      rollNo: 'GBU2024002',
      program: 'MBA',
      school: 'SoM',
      status: 'Completed',
      step: 6,
      email: 'priya.patel@gbu.ac.in',
      phone: '+91 9876543211'
    },
    {
      id: 3,
      name: 'Rohit Kumar',
      rollNo: 'GBU2024003',
      program: 'B.A. Psychology',
      school: 'SoHSS',
      status: 'Pending',
      step: 1,
      email: 'rohit.kumar@gbu.ac.in',
      phone: '+91 9876543212'
    }
  ];

  const getStatusBadge = (status, step) => {
    switch (status) {
      case 'Completed':
        return (
          <Badge variant="default" className="bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            {status}
          </Badge>
        );
      case 'In Progress':
        return (
          <Badge variant="secondary">
            <Clock className="w-3 h-3 mr-1" />
            Step {step}/6
          </Badge>
        );
      case 'Pending':
        return (
          <Badge variant="outline">
            <Clock className="w-3 h-3 mr-1" />
            {status}
          </Badge>
        );
      default:
        return (
          <Badge variant="outline">{status}</Badge>
        );
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Student Onboarding</h2>
          <p className="text-gray-600">Streamlined admission to enrollment process</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Upload className="w-4 h-4 mr-2" />
            Bulk Import
          </Button>
          <Button>
            <UserPlus className="w-4 h-4 mr-2" />
            New Admission
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Admissions</p>
                <p className="text-2xl font-bold text-blue-600">1,248</p>
              </div>
              <GraduationCap className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">In Progress</p>
                <p className="text-2xl font-bold text-orange-600">156</p>
              </div>
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-green-600">1,092</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">ID Cards Pending</p>
                <p className="text-2xl font-bold text-purple-600">23</p>
              </div>
              <IdCard className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="new-admission" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="new-admission">New Admission</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
        </TabsList>

        {/* New Admission Tab */}
        <TabsContent value="new-admission" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Admission Form */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserPlus className="w-5 h-5" />
                  Student Admission Form
                </CardTitle>
                <CardDescription>
                  Complete student admission and onboarding process
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">School *</label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={selectedSchool}
                      onChange={(e) => setSelectedSchool(e.target.value)}
                    >
                      <option value="">Select School</option>
                      {GBU_SCHOOLS.map(school => (
                        <option key={school.id} value={school.id}>
                          {school.name} ({school.code})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Program *</label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={selectedProgram}
                      onChange={(e) => setSelectedProgram(e.target.value)}
                    >
                      <option value="">Select Program</option>
                      <option value="btech">B.Tech</option>
                      <option value="mtech">M.Tech</option>
                      <option value="mba">MBA</option>
                      <option value="bba">BBA</option>
                      <option value="ba">B.A.</option>
                      <option value="ma">M.A.</option>
                      <option value="phd">Ph.D.</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Student Name *</label>
                    <Input placeholder="Enter full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Father's Name *</label>
                    <Input placeholder="Enter father's name" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <Input placeholder="Enter phone number" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input placeholder="Enter email address" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Date of Birth *</label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Admission Category *</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option value="">Select Category</option>
                      <option value="general">General</option>
                      <option value="obc">OBC</option>
                      <option value="sc">SC</option>
                      <option value="st">ST</option>
                      <option value="ews">EWS</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Address *</label>
                  <textarea className="w-full p-2 border border-gray-300 rounded-md" rows={3} placeholder="Enter complete address"></textarea>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">Document Upload</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'Admission Letter',
                      'Photo',
                      '12th Marksheet',
                      'Aadhar Card',
                      'Transfer Certificate',
                      'Medical Certificate'
                    ].map((doc) => (
                      <div key={doc}>
                        <label className="block text-sm font-medium mb-2">{doc} *</label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                          <Upload className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                          <p className="text-sm text-gray-600">Drop file here or click to upload</p>
                          <input type="file" className="hidden" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button className="flex-1">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Submit Admission
                  </Button>
                  <Button variant="outline">Save Draft</Button>
                </div>
              </CardContent>
            </Card>
            {/* Progress Tracker */}
            <Card>
              <CardHeader>
                <CardTitle>Onboarding Progress</CardTitle>
                <CardDescription>Track completion status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {onboardingSteps.map((step) => (
                    <div key={step.id} className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                      }`}>
                        {step.completed ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          <step.icon className="w-4 h-4" />
                        )}
                      </div>
                      <p className={`text-sm font-medium ${
                        step.completed ? 'text-green-600' : 'text-gray-600'
                      }`}>
                        {step.name}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* In Progress Tab */}
        <TabsContent value="in-progress" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Admissions In Progress</CardTitle>
              <CardDescription>Students currently in the onboarding process</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student Name</TableHead>
                    <TableHead>Roll No</TableHead>
                    <TableHead>Program</TableHead>
                    <TableHead>School</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentAdmissions.filter(student => student.status === 'In Progress').map((student) => (
                    <TableRow key={student.id}>
                      <TableCell className="font-medium">{student.name}</TableCell>
                      <TableCell>{student.rollNo}</TableCell>
                      <TableCell>{student.program}</TableCell>
                      <TableCell>{student.school}</TableCell>
                      <TableCell>{getStatusBadge(student.status, student.step)}</TableCell>
                      <TableCell>
                        <div className="text-sm">
                          {student.email}
                          <div className="text-gray-500">{student.phone}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline">
                          Continue
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Completed Tab */}
        <TabsContent value="completed" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Completed Admissions</CardTitle>
              <CardDescription>Successfully enrolled students</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student Name</TableHead>
                    <TableHead>Roll No</TableHead>
                    <TableHead>Program</TableHead>
                    <TableHead>School</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentAdmissions.filter(student => student.status === 'Completed').map((student) => (
                    <TableRow key={student.id}>
                      <TableCell className="font-medium">{student.name}</TableCell>
                      <TableCell>{student.rollNo}</TableCell>
                      <TableCell>{student.program}</TableCell>
                      <TableCell>{student.school}</TableCell>
                      <TableCell>{getStatusBadge(student.status, student.step)}</TableCell>
                      <TableCell>
                        <div className="text-sm">
                          {student.email}
                          <div className="text-gray-500">{student.phone}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button size="sm" variant="outline">
                            <IdCard className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Mail className="w-3 h-3" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Services Tab */}
        <TabsContent value="services" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  Hostel Allocation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Manage hostel room allocations for new students</p>
                <Button variant="outline" size="sm">Configure</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bus className="w-5 h-5" />
                  Transport Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Assign bus routes and transport facilities</p>
                <Button variant="outline" size="sm">Manage</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  ID Card Generator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Generate QR-based student ID cards</p>
                <Button variant="outline" size="sm">Generate</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudentOnboarding;