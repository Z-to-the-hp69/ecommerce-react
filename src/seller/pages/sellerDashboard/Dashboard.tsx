import React from "react";
import { Card, Typography, LinearProgress, Box } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample chart data
const data = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4000 },
  { month: "May", sales: 6000 },
  { month: "Jun", sales: 7000 },
];

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight="bold">
          Dashboard
        </Typography>
        <Typography color="textSecondary">
          Welcome back! Here's an overview of your stats.
        </Typography>
      </Box>

      {/* Stats Cards using Flexbox */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        {/* Users Card */}
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            p: 2,
            flex: "1 1 300px",
          }}
        >
          <PeopleIcon sx={{ fontSize: 50, color: "#3f51b5", mr: 2 }} />
          <Box>
            <Typography color="textSecondary">Users</Typography>
            <Typography variant="h5" fontWeight="bold">
              1,245
            </Typography>
            <LinearProgress variant="determinate" value={75} sx={{ mt: 1 }} />
          </Box>
        </Card>

        {/* Sales Card */}
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            p: 2,
            flex: "1 1 300px",
          }}
        >
          <MonetizationOnIcon sx={{ fontSize: 50, color: "#4caf50", mr: 2 }} />
          <Box>
            <Typography color="textSecondary">Sales</Typography>
            <Typography variant="h5" fontWeight="bold">
              $12,300
            </Typography>
            <LinearProgress variant="determinate" value={60} sx={{ mt: 1 }} />
          </Box>
        </Card>

        {/* Orders Card */}
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            p: 2,
            flex: "1 1 300px",
          }}
        >
          <ShoppingCartIcon sx={{ fontSize: 50, color: "#f44336", mr: 2 }} />
          <Box>
            <Typography color="textSecondary">Orders</Typography>
            <Typography variant="h5" fontWeight="bold">
              320
            </Typography>
            <LinearProgress variant="determinate" value={90} sx={{ mt: 1 }} />
          </Box>
        </Card>
      </Box>

      {/* Sales Chart */}
      <Box
        sx={{
          mt: 6,
          p: 3,
          backgroundColor: "white",
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <Typography variant="h6" mb={2}>
          Sales Overview
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#3f51b5"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default Dashboard;
