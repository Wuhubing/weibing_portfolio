import React, { useEffect, useState } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Card,
  CardContent,
  Box,
  Chip,
  IconButton,
  Tooltip,
  TextField,
  InputAdornment,
  TablePagination
} from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import TodayIcon from '@mui/icons-material/Today';
import WebIcon from '@mui/icons-material/Web';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DevicesIcon from '@mui/icons-material/Devices';
import LanguageIcon from '@mui/icons-material/Language';
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchIcon from '@mui/icons-material/Search';

interface Visit {
  id: string;
  timestamp: string;
  page: string;
  language: string;
  screenSize: string;
  platform: string;
  timeZone: string;
  referrer?: string;
  ip: string;
  userAgent: string;
}

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: number;
  color?: 'primary' | 'secondary' | 'success' | 'info';
}

const API_URL = 'https://fqxgvpik1i.execute-api.us-east-2.amazonaws.com/prod/visits';

const Auth: React.FC = () => {
  const [visits, setVisits] = useState<Visit[]>([]);
  const [filteredVisits, setFilteredVisits] = useState<Visit[]>([]);
  const [searchIP, setSearchIP] = useState('');
  const [stats, setStats] = useState({
    totalVisits: 0,
    todayVisits: 0,
    uniquePages: new Set<string>(),
    uniqueIPs: new Set<string>(),
    uniquePlatforms: new Set<string>(),
  });
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const fetchVisits = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      const visitData = data.items || [];
      
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      let todayCount = 0;
      const pages = new Set<string>();
      const ips = new Set<string>();
      const platforms = new Set<string>();

      visitData.forEach((visit: Visit) => {
        const visitDate = new Date(visit.timestamp);
        pages.add(visit.page);
        ips.add(visit.ip);
        platforms.add(visit.platform);
        
        if (visitDate >= today) {
          todayCount++;
        }
      });

      // 按时间戳排序，最新的在前
      const sortedVisits = visitData.sort((a: Visit, b: Visit) => 
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );

      setVisits(sortedVisits);
      setFilteredVisits(sortedVisits);
      setStats({
        totalVisits: visitData.length,
        todayVisits: todayCount,
        uniquePages: pages,
        uniqueIPs: ips,
        uniquePlatforms: platforms
      });

    } catch (error) {
      console.error("Error fetching visits:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVisits();
  }, []);

  // IP 搜索过滤
  useEffect(() => {
    if (searchIP.trim()) {
      const filtered = visits.filter(visit => 
        visit.ip.toLowerCase().includes(searchIP.toLowerCase())
      );
      setFilteredVisits(filtered);
    } else {
      setFilteredVisits(visits);
    }
    setPage(0); // 重置页码到第一页
  }, [searchIP, visits]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // 计算当前页显示的数据
  const currentPageVisits = filteredVisits.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const StatCard = ({ icon, title, value, color = "primary" }: StatCardProps) => (
    <Card 
      elevation={1}
      sx={{ 
        height: '100%',
        bgcolor: 'white',
        border: '1px solid rgba(0, 0, 0, 0.12)',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 2
        }
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="center" mb={2}>
          {icon}
          <Typography variant="h6" ml={1}>{title}</Typography>
        </Box>
        <Typography variant="h3" color={`${color}.main`}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4, bgcolor: 'white', p: 3, borderRadius: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4" component="h1">
          Visit Statistics
        </Typography>
        <Tooltip title="Refresh Data">
          <IconButton onClick={fetchVisits} disabled={loading}>
            <RefreshIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            icon={<PeopleAltIcon color="primary" fontSize="large" />}
            title="Total Visits"
            value={stats.totalVisits}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            icon={<TodayIcon color="secondary" fontSize="large" />}
            title="Today's Visits"
            value={stats.todayVisits}
            color="secondary"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            icon={<WebIcon color="success" fontSize="large" />}
            title="Unique Pages"
            value={stats.uniquePages.size}
            color="success"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            icon={<DevicesIcon color="info" fontSize="large" />}
            title="Unique Visitors"
            value={stats.uniqueIPs.size}
            color="info"
          />
        </Grid>
      </Grid>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom>Platforms</Typography>
        <Box display="flex" gap={1} flexWrap="wrap">
          {Array.from(stats.uniquePlatforms).map((platform) => (
            <Chip 
              key={platform}
              icon={<DevicesIcon />}
              label={platform}
              color="primary"
              variant="outlined"
            />
          ))}
        </Box>
      </Box>

      <Box mb={3}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search by IP address..."
          value={searchIP}
          onChange={(e) => setSearchIP(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ maxWidth: 400 }}
        />
      </Box>

      <TableContainer 
        component={Paper} 
        sx={{ 
          bgcolor: 'white',
          mb: 4,
          '& .MuiTableCell-root': {
            borderColor: 'rgba(224, 224, 224, 1)'
          }
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Time</TableCell>
              <TableCell>IP Address</TableCell>
              <TableCell>Page</TableCell>
              <TableCell>Platform</TableCell>
              <TableCell>Language</TableCell>
              <TableCell>Screen Size</TableCell>
              <TableCell>User Agent</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPageVisits.map((visit) => (
              <TableRow 
                key={visit.id}
                sx={{ '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.04)' } }}
              >
                <TableCell>{new Date(visit.timestamp).toLocaleString()}</TableCell>
                <TableCell>
                  <Tooltip title="Click to view IP details">
                    <Chip 
                      size="small"
                      label={visit.ip}
                      onClick={() => window.open(`https://www.opentracker.net/feature/ip-tracker/?ip=${visit.ip}`, '_blank')}
                      color="primary"
                      variant="outlined"
                      sx={{ cursor: 'pointer' }}
                    />
                  </Tooltip>
                </TableCell>
                <TableCell>
                  <Chip 
                    size="small" 
                    label={visit.page} 
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>
                  <Chip 
                    size="small"
                    icon={<DevicesIcon />}
                    label={visit.platform}
                  />
                </TableCell>
                <TableCell>
                  <Chip 
                    size="small"
                    icon={<LanguageIcon />}
                    label={visit.language}
                  />
                </TableCell>
                <TableCell>{visit.screenSize}</TableCell>
                <TableCell>
                  <Tooltip title={visit.userAgent}>
                    <Chip 
                      size="small"
                      icon={<DevicesIcon />}
                      label={visit.userAgent.split('/')[0]}
                    />
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          component="div"
          count={filteredVisits.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Lines per page"
          labelDisplayedRows={({ from, to, count }) => 
            `${from}-${to} of ${count} items`
          }
        />
      </TableContainer>
    </Container>
  );
};

export default Auth;