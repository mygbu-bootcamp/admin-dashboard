import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Switch } from '../components/ui/switch';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import {
  AlertTriangle,
  Bell,
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  TrendingUp,
  Users,
  GraduationCap,
  MapPin,
  MessageSquare,
  BookOpen,
  Settings,
  Sun,
  Moon,
  Cake
} from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const UniversityCommandCentre = ({ userRole }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [birthdayGreetingsEnabled, setBirthdayGreetingsEnabled] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const { toast } = useToast();

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  const getRoleTitle = (role) => {
    const titles = {
      'registrar': 'Registrar',
      'vc': 'Vice Chancellor',
      'dean': 'Dean',
      'hod': 'Head of Department',
      'admin': 'Admin Officer',
      'iqac': 'IQAC Officer'
    };
    return titles[role] || 'Administrator';
  };

  // Mock data for real-time dashboard
  const pendingApprovals = [
    { id: 1, type: 'Faculty Joining', name: 'Dr. Amit Kumar - SoICT', priority: 'High', date: '2024-12-27', school: 'SoICT' },
    { id: 2, type: 'Leave Request', name: 'Prof. Sunita Sharma - SoE', priority: 'Medium', date: '2024-12-26', school: 'SoE' },
    { id: 3, type: 'Course Mapping', name: 'AI & ML - CSE Department', priority: 'High', date: '2024-12-25', school: 'SoICT' },
    { id: 4, type: 'Startup Proposal', name: 'EduTech Innovation - Team Alpha', priority: 'Medium', date: '2024-12-24', school: 'SoM' },
    { id: 5, type: 'Grievance', name: 'Library Access Issue - Student', priority: 'High', date: '2024-12-23', school: 'SoHSS' }
  ];

  const todaysMeetings = [
    { time: '10:00 AM', title: 'Academic Council Meeting', attendees: 18, location: 'VC Office' },
    { time: '02:00 PM', title: 'IQAC Review Session', attendees: 12, location: 'IQAC Room' },
    { time: '04:00 PM', title: 'Department Heads Sync', attendees: 22, location: 'Conference Hall' }
  ];

  const biometricSummary = {
    totalPresent: 112,
    totalStaff: 120,
    lateArrivals: 7,
    earlyDepartures: 3,
    anomalies: 2
  };

  const birthdaysToday = [
    { name: 'Dr. Rajesh Kumar', department: 'SoICT', type: 'Faculty' },
    { name: 'Ms. Priya Sharma', department: 'SoHSS', type: 'Staff' },
    { name: 'Amit Singh', department: 'SoE', type: 'Student' }
  ];

  const smartAlerts = [
    { type: 'urgent', message: 'SoHSS: 4 unresolved grievances > 7 days', action: 'Review Now' },
    { type: 'warning', message: 'SoICT: 12 Courses pending mapping for Odd Sem', action: 'Check Status' },
    { type: 'info', message: 'Law: 3 files delayed in movement > 5 days', action: 'Track Files' },
    { type: 'success', message: 'SoM: All NAAC criteria 85% complete', action: 'View Progress' }
  ];

  const interactiveTiles = [
    {
      title: "Pending Approvals",
      count: pendingApprovals.length,
      icon: Bell,
      color: "bg-orange-500",
      description: "Items awaiting action",
      action: () => toast({ title: "Opening Approval Centre", description: "Loading pending items..." })
    },
    {
      title: "Today's Meetings",
      count: todaysMeetings.length,
      icon: Calendar,
      color: "bg-blue-500",
      description: "Scheduled for today",
      action: () => toast({ title: "Opening Calendar", description: "Loading today's schedule..." })
    },
    {
      title: "Staff Present",
      count: `${biometricSummary.totalPresent}/${biometricSummary.totalStaff}`,
      icon: Users,
      color: "bg-green-500",
      description: "Live attendance",
      action: () => toast({ title: "Opening Biometric Logs", description: "Loading attendance data..." })
    },
    {
      title: "Active Grievances",
      count: 8,
      icon: MessageSquare,
      color: "bg-red-500",
      description: "Require attention",
      action: () => toast({ title: "Opening Grievance Tracker", description: "Loading active cases..." })
    }
  ];

  const handleApproval = (id, action) => {
    const item = pendingApprovals.find(p => p.id === id);
    toast({
      title: `${action === 'approve' ? 'Approved' : 'Rejected'}`,
      description: `${item?.type}: ${item?.name} has been ${action}d successfully.`,
      variant: action === 'approve' ? 'default' : 'destructive'
    });
  };

  const handleBirthdayGreeting = (person) => {
    toast({
      title: "Birthday Greeting Sent! 🎉",
      description: `Automated greeting sent to ${person.name} via email and SMS.`
    });
  };

  return (
    <div className={`space-y-6 ${darkMode ? 'dark' : ''}`}>
      {/* Header with Dynamic Greeting */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              {getGreeting()}, {getRoleTitle(userRole)}!
            </h1>
            <p className="text-blue-100 text-lg">
              Welcome to GBU University Command Centre
            </p>
            <p className="text-blue-200 text-sm mt-1">
              {currentTime.toLocaleDateString('en-IN', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })} • {currentTime.toLocaleTimeString('en-IN')}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Sun className="w-4 h-4" />
              <Switch
                checked={darkMode}
                onCheckedChange={setDarkMode}
                className="data-[state=checked]:bg-blue-300"
              />
              <Moon className="w-4 h-4" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">Live</div>
              <div className="text-blue-200">Command Centre</div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Dashboard Tiles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {interactiveTiles.map((tile, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-all duration-200 cursor-pointer group hover:-translate-y-1"
            onClick={tile.action}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className={`w-12 h-12 ${tile.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <tile.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{tile.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{tile.description}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="text-lg font-bold">
                  {tile.count}
                </Badge>
                <span className="text-xs text-gray-400 group-hover:text-gray-600 transition-colors">
                  Click to open →
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Dashboard Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="approvals">Approvals</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="biometric">Biometric</TabsTrigger>
          <TabsTrigger value="meetings">Meetings</TabsTrigger>
          <TabsTrigger value="alerts">Smart Alerts</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Today's Birthdays */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Cake className="w-5 h-5" />
                    Birthday Celebrations
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Auto Greetings</span>
                    <Switch
                      checked={birthdayGreetingsEnabled}
                      onCheckedChange={setBirthdayGreetingsEnabled}
                    />
                  </div>
                </div>
                <CardDescription>Today's birthday celebrations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {birthdaysToday.map((person, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                      <div>
                        <p className="font-medium">{person.name}</p>
                        <p className="text-sm text-gray-600">{person.department} • {person.type}</p>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => handleBirthdayGreeting(person)}
                        disabled={!birthdayGreetingsEnabled}
                      >
                        Send Wishes 🎉
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Today's Meetings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Today's Schedule
                </CardTitle>
                <CardDescription>Important meetings and events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todaysMeetings.map((meeting, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{meeting.title}</p>
                        <p className="text-sm text-gray-600">
                          {meeting.time} • {meeting.location} • {meeting.attendees} attendees
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Join
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="approvals" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Pending Approvals Centre</CardTitle>
              <CardDescription>Items requiring your immediate attention</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Details</TableHead>
                    <TableHead>School</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingApprovals.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.type}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{item.school}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={item.priority === 'High' ? 'destructive' : 'secondary'}
                        >
                          {item.priority}
                        </Badge>
                      </TableCell>
                      <TableCell>{item.date}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            onClick={() => handleApproval(item.id, 'approve')}
                          >
                            Approve
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleApproval(item.id, 'reject')}
                          >
                            Reject
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

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Analytics</CardTitle>
                <CardDescription>Administrative workflow insights</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Total Approvals This Month</span>
                    <Badge className="text-lg">247</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Average Processing Time</span>
                    <Badge variant="secondary">2.3 days</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Approval Rate</span>
                    <Badge className="bg-green-500">94.2%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Pending Items</span>
                    <Badge variant="destructive">{pendingApprovals.length}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>School-wise Performance</CardTitle>
                <CardDescription>Departmental efficiency metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {['SoICT', 'SoE', 'SoM', 'SoHSS', 'SoBSC'].map((school) => (
                    <div key={school} className="flex justify-between items-center">
                      <span className="font-medium">{school}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${Math.random() * 40 + 60}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-600">
                          {Math.floor(Math.random() * 40 + 60)}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="biometric" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Live Biometric Dashboard</CardTitle>
              <CardDescription>Real-time attendance monitoring</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{biometricSummary.totalPresent}</div>
                  <div className="text-sm text-gray-600">Present Today</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-600">{biometricSummary.totalStaff}</div>
                  <div className="text-sm text-gray-600">Total Staff</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">{biometricSummary.lateArrivals}</div>
                  <div className="text-sm text-gray-600">Late Arrivals</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">{biometricSummary.earlyDepartures}</div>
                  <div className="text-sm text-gray-600">Early Exits</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{biometricSummary.anomalies}</div>
                  <div className="text-sm text-gray-600">Anomalies</div>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-green-600 h-3 rounded-full"
                  style={{ width: `${(biometricSummary.totalPresent / biometricSummary.totalStaff) * 100}%` }}
                />
              </div>
              <p className="text-center text-sm text-gray-600 mt-2">
                {Math.round((biometricSummary.totalPresent / biometricSummary.totalStaff) * 100)}% Attendance Rate
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="meetings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Meeting & Events Calendar</CardTitle>
              <CardDescription>Scheduled meetings and university events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todaysMeetings.map((meeting, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold">{meeting.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          <Clock className="w-4 h-4 inline mr-1" />
                          {meeting.time} •
                          <MapPin className="w-4 h-4 inline ml-2 mr-1" />
                          {meeting.location} •
                          <Users className="w-4 h-4 inline ml-2 mr-1" />
                          {meeting.attendees} attendees
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">View Agenda</Button>
                        <Button size="sm">Join Meeting</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Smart Alerts & Notifications</CardTitle>
              <CardDescription>AI-powered insights and priority alerts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {smartAlerts.map((alert, index) => (
                  <div
                    key={index}
                    className={`p-4 border rounded-lg ${
                      alert.type === 'urgent' ? 'bg-red-50 border-red-200' :
                      alert.type === 'warning' ? 'bg-yellow-50 border-yellow-200' :
                      alert.type === 'info' ? 'bg-blue-50 border-blue-200' :
                      'bg-green-50 border-green-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <AlertTriangle className={`w-5 h-5 ${
                          alert.type === 'urgent' ? 'text-red-600' :
                          alert.type === 'warning' ? 'text-yellow-600' :
                          alert.type === 'info' ? 'text-blue-600' :
                          'text-green-600'
                        }`} />
                        <span className="font-medium">{alert.message}</span>
                      </div>
                      <Button size="sm" variant="outline">
                        {alert.action}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UniversityCommandCentre;