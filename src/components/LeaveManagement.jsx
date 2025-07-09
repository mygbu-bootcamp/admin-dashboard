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
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Download,
  Filter,
  Search,
  TrendingUp
} from 'lucide-react';
import { GBU_SCHOOLS, LEAVE_TYPES } from '../data/gbuMasterData';

const LeaveManagement = () => {
  const [selectedSchool, setSelectedSchool] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [leaveFilter, setLeaveFilter] = useState('all');

  const leaveApplications = [
    {
      id: 1,
      employeeId: 'SoICT2023001',
      name: 'Dr. Amit Kumar Singh',
      school: 'SoICT',
      department: 'CSE',
      leaveType: 'cl',
      fromDate: '2024-12-28',
      toDate: '2024-12-30',
      days: 3,
      reason: 'Personal work',
      status: 'Pending',
      appliedDate: '2024-12-23',
      hodStatus: 'Approved',
      adminStatus: 'Pending'
    },
    {
      id: 2,
      employeeId: 'SoE2023012',
      name: 'Prof. Sunita Sharma',
      school: 'SoE',
      department: 'Civil',
      leaveType: 'el',
      fromDate: '2025-01-05',
      toDate: '2025-01-15',
      days: 11,
      reason: 'Family vacation',
      status: 'Approved',
      appliedDate: '2024-12-20',
      hodStatus: 'Approved',
      adminStatus: 'Approved'
    },
    {
      id: 3,
      employeeId: 'SoM2023008',
      name: 'Dr. Rajesh Gupta',
      school: 'SoM',
      department: 'MBA',
      leaveType: 'fdp',
      fromDate: '2024-12-30',
      toDate: '2025-01-03',
      days: 5,
      reason: 'Faculty Development Program at IIT Delhi',
      status: 'Approved',
      appliedDate: '2024-12-18',
      hodStatus: 'Approved',
      adminStatus: 'Approved'
    },
    {
      id: 4,
      employeeId: 'SoHSS2023015',
      name: 'Dr. Priya Verma',
      school: 'SoHSS',
      department: 'Psychology',
      leaveType: 'dl',
      fromDate: '2024-12-25',
      toDate: '2024-12-27',
      days: 3,
      reason: 'Conference presentation at JNU',
      status: 'Rejected',
      appliedDate: '2024-12-22',
      hodStatus: 'Approved',
      adminStatus: 'Rejected'
    }
  ];

  const leaveBalance = [
    { employeeId: 'SoICT2023001', name: 'Dr. Amit Kumar Singh', cl: 8, el: 20, dl: 360, al: 25, taken: 4 },
    { employeeId: 'SoE2023012', name: 'Prof. Sunita Sharma', cl: 10, el: 25, dl: 365, al: 30, taken: 2 },
    { employeeId: 'SoM2023008', name: 'Dr. Rajesh Gupta', cl: 5, el: 15, dl: 355, al: 20, taken: 7 },
    { employeeId: 'SoHSS2023015', name: 'Dr. Priya Verma', cl: 2, el: 10, dl: 350, al: 15, taken: 10 }
  ];

  const schoolWiseLeaveStats = [
    { school: 'SoICT', pending: 2, approved: 10, rejected: 1, total: 13 },
    { school: 'SoE', pending: 1, approved: 8, rejected: 2, total: 11 },
    { school: 'SoM', pending: 0, approved: 7, rejected: 1, total: 8 },
    { school: 'SoHSS', pending: 1, approved: 6, rejected: 2, total: 9 },
    { school: 'SoBSC', pending: 0, approved: 5, rejected: 0, total: 5 },
    { school: 'SoBT', pending: 0, approved: 4, rejected: 1, total: 5 },
    { school: 'SoLJG', pending: 1, approved: 3, rejected: 1, total: 5 },
    { school: 'SoVSAS', pending: 0, approved: 2, rejected: 0, total: 2 },
    { school: 'SoET', pending: 0, approved: 1, rejected: 0, total: 1 }
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Approved':
        return (
          <Badge variant="default">
            <CheckCircle className="w-3 h-3 mr-1" />
            {status}
          </Badge>
        );
      case 'Pending':
        return (
          <Badge variant="secondary">
            <Clock className="w-3 h-3 mr-1" />
            {status}
          </Badge>
        );
      case 'Rejected':
        return (
          <Badge variant="destructive">
            <XCircle className="w-3 h-3 mr-1" />
            {status}
          </Badge>
        );
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getLeaveTypeName = (code) => {
    const leaveType = LEAVE_TYPES.find(type => type.id === code.toLowerCase());
    return leaveType ? leaveType.name : code;
  };

  const filteredApplications = leaveApplications.filter(application => {
    if (leaveFilter === 'all') return true;
    return application.status.toLowerCase() === leaveFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Leave Management</h2>
          <p className="text-gray-600">Manage faculty and staff leave applications</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Leave Calendar
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Approvals</p>
                <p className="text-2xl font-bold text-orange-600">
                  {schoolWiseLeaveStats.reduce((sum, school) => sum + school.pending, 0)}
                </p>
              </div>
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Approved This Month</p>
                <p className="text-2xl font-bold text-green-600">
                  {schoolWiseLeaveStats.reduce((sum, school) => sum + school.approved, 0)}
                </p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Rejected</p>
                <p className="text-2xl font-bold text-red-600">
                  {schoolWiseLeaveStats.reduce((sum, school) => sum + school.rejected, 0)}
                </p>
              </div>
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Applications</p>
                <p className="text-2xl font-bold text-blue-600">
                  {schoolWiseLeaveStats.reduce((sum, school) => sum + school.total, 0)}
                </p>
              </div>
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="applications" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="balance">Leave Balance</TabsTrigger>
          <TabsTrigger value="analytics">School Analytics</TabsTrigger>
          <TabsTrigger value="policies">Leave Policies</TabsTrigger>
        </TabsList>

        <TabsContent value="applications" className="space-y-6">
          {/* Filters */}
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  <span className="text-sm font-medium">Filters:</span>
                </div>
                <select 
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                  value={selectedSchool}
                  onChange={(e) => setSelectedSchool(e.target.value)}
                >
                  <option value="">All Schools</option>
                  {GBU_SCHOOLS.map(school => (
                    <option key={school.id} value={school.id}>{school.code}</option>
                  ))}
                </select>
                <select 
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                  value={leaveFilter}
                  onChange={(e) => setLeaveFilter(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-gray-400" />
                  <Input placeholder="Search employee..." className="w-64" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Applications Table */}
          <Card>
            <CardHeader>
              <CardTitle>Leave Applications</CardTitle>
              <CardDescription>Manage leave requests from faculty and staff</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>School/Dept</TableHead>
                    <TableHead>Leave Type</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Days</TableHead>
                    <TableHead>Applied Date</TableHead>
                    <TableHead>HoD Status</TableHead>
                    <TableHead>Admin Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredApplications.map((application) => (
                    <TableRow key={application.id}>
                      <TableCell>
                        <div className="font-medium">{application.name}</div>
                        <div className="text-sm text-gray-500">{application.employeeId}</div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">{application.school}</div>
                        <div className="text-sm text-gray-500">{application.department}</div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{getLeaveTypeName(application.leaveType)}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          {application.fromDate}
                          <div className="text-gray-500">to {application.toDate}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="font-medium">{application.days} days</span>
                      </TableCell>
                      <TableCell>{application.appliedDate}</TableCell>
                      <TableCell>{getStatusBadge(application.hodStatus)}</TableCell>
                      <TableCell>{getStatusBadge(application.adminStatus)}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          {application.status === 'Pending' && (
                            <>
                              <Button size="sm" variant="outline" className="text-green-600">
                                <CheckCircle className="w-3 h-3" />
                              </Button>
                              <Button size="sm" variant="outline" className="text-red-600">
                                <XCircle className="w-3 h-3" />
                              </Button>
                            </>
                          )}
                          <Button size="sm" variant="outline">
                            View
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

        <TabsContent value="balance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Leave Balance Tracking</CardTitle>
              <CardDescription>Monitor leave balances for all faculty and staff</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>CL Balance</TableHead>
                    <TableHead>EL Balance</TableHead>
                    <TableHead>DL Balance</TableHead>
                    <TableHead>AL Balance</TableHead>
                    <TableHead>Total Taken</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leaveBalance.map((balance) => (
                    <TableRow key={balance.employeeId}>
                      <TableCell>
                        <div className="font-medium">{balance.name}</div>
                        <div className="text-sm text-gray-500">{balance.employeeId}</div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{balance.cl}</span>
                          <span className="text-xs text-gray-500">/ 12</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{balance.el}</span>
                          <span className="text-xs text-gray-500">/ 30</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{balance.dl}</span>
                          <span className="text-xs text-gray-500">/ 365</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{balance.al}</span>
                          <span className="text-xs text-gray-500">/ 30</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="font-medium text-blue-600">{balance.taken} days</span>
                      </TableCell>
                      <TableCell>
                        {balance.cl < 3 ? (
                          <Badge variant="destructive">
                            <AlertTriangle className="w-3 h-3 mr-1" />
                            Low Balance
                          </Badge>
                        ) : (
                          <Badge variant="default">Normal</Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                School-wise Leave Analytics
              </CardTitle>
              <CardDescription>
                Leave request patterns across different schools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {schoolWiseLeaveStats.map((school) => (
                  <div key={school.school} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{school.school}</span>
                      <span className="text-sm text-gray-500">{school.total} total applications</span>
                    </div>
                    <div className="flex w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="bg-green-500" 
                        style={{ width: `${(school.approved / school.total) * 100}%` }}
                        title={`Approved: ${school.approved}`}
                      />
                      <div 
                        className="bg-yellow-500" 
                        style={{ width: `${(school.pending / school.total) * 100}%` }}
                        title={`Pending: ${school.pending}`}
                      />
                      <div 
                        className="bg-red-500" 
                        style={{ width: `${(school.rejected / school.total) * 100}%` }}
                        title={`Rejected: ${school.rejected}`}
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        Approved: {school.approved}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        Pending: {school.pending}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        Rejected: {school.rejected}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="policies" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LEAVE_TYPES.map((leaveType) => (
              <Card key={leaveType.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{leaveType.name}</CardTitle>
                  <CardDescription>
                    Maximum {leaveType.maxDays} days per year
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Maximum Days:</span>
                      <span className="font-medium">{leaveType.maxDays}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Approval Required:</span>
                      <span className="font-medium">
                        {leaveType.id === 'cl' ? 'HoD + Admin' : 'HoD + Admin + IQAC'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Advance Notice:</span>
                      <span className="font-medium">
                        {leaveType.id === 'cl' ? '1 day' : '7 days'}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LeaveManagement;