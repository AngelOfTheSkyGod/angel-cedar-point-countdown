import './App.css'
import {Box, Stack, Typography} from "@mui/material";
type TimeRemaining = {
    weeks: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

import "../public/cosmo.jpg"
import {useEffect, useState} from "react";
function timeUntilSeptember5(fromDate: Date = new Date()): TimeRemaining {
    const year = fromDate.getFullYear();

    // September = month 8 (0-based)
    let target = new Date(year, 8, 5);

    // If already passed this year, use next year
    if (fromDate > target) {
        target = new Date(year + 1, 8, 5);
    }

    let diffMs = target.getTime() - fromDate.getTime();

    if (diffMs < 0) diffMs = 0;

    const totalSeconds = Math.floor(diffMs / 1000);

    const secondsPerMinute = 60;
    const secondsPerHour = 60 * secondsPerMinute;
    const secondsPerDay = 24 * secondsPerHour;
    const secondsPerWeek = 7 * secondsPerDay;

    const weeks = Math.floor(totalSeconds / secondsPerWeek);
    const days = Math.floor((totalSeconds % secondsPerWeek) / secondsPerDay);
    const hours = Math.floor((totalSeconds % secondsPerDay) / secondsPerHour);
    const minutes = Math.floor((totalSeconds % secondsPerHour) / secondsPerMinute);
    const seconds = totalSeconds % secondsPerMinute;

    return { weeks, days, hours, minutes, seconds };
}


function App() {
    const [date, setDate] = useState<Date>(new Date());
    const remaining = timeUntilSeptember5(date);

    useEffect(() => {
        // Update every second
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);

        // Cleanup on unmount
        return () => clearInterval(interval);
    }, []);
    const dateTimeString = new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
  return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                m: 1,
                width: "100%",
                height: "100%",
                alignItems:"center",
                justifyContent:"center"
            }}
        >
            <img
                src="/cosmo.jpg"
                alt="background"
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: -1
                }}
            />
            <Stack alignItems={"center"}>
                <Typography variant="h1" gutterBottom sx={{ color: "#A3FF12" }}>
                    Go to Cedar Point!
                </Typography>
                <Stack margin={"0 0 4rem 0"} direction={"row"} gap={2}>
                    <Typography variant="h2" gutterBottom sx={{ color: "white" }}>
                        {remaining.weeks}
                    </Typography>
                    <Typography variant="h2" gutterBottom sx={{ color: "#A3FF12" }}>
                        Weeks
                    </Typography>
                </Stack>
                <Stack margin={"0 0 4rem 0"} direction={"row"} gap={2}>
                    <Typography variant="h2" gutterBottom sx={{ color: "white" }}>
                        {remaining.days}
                    </Typography>
                    <Typography variant="h2" gutterBottom sx={{ color: "#A3FF12" }}>
                        Days
                    </Typography>
                </Stack>
                <Stack margin={"0 0 4rem 0"} direction={"row"} gap={2}>
                    <Typography variant="h2" gutterBottom sx={{ color: "white" }}>
                        {remaining.hours}
                    </Typography>
                    <Typography variant="h2" gutterBottom sx={{ color: "#A3FF12" }}>
                        Hours
                    </Typography>
                </Stack>
                <Stack margin={"0 0 4rem 0"} direction={"row"} gap={2}>
                    <Typography variant="h2" gutterBottom sx={{ color: "white" }}>
                        {remaining.minutes}
                    </Typography>
                    <Typography variant="h2" gutterBottom sx={{ color: "#A3FF12" }}>
                        Minutes
                    </Typography>
                </Stack>
                <Stack margin={"0 0 4rem 0"} direction={"row"} gap={2}>
                    <Typography variant="h2" gutterBottom sx={{ color: "white" }}>
                        {remaining.seconds}
                    </Typography>
                    <Typography variant="h2" gutterBottom sx={{ color: "#A3FF12" }}>
                        Seconds
                    </Typography>
                </Stack>
                <Typography variant="h4" gutterBottom sx={{ color: "#A3FF12" }}>
                    Until Saturday, September 5th, 2026
                </Typography>
                <Typography variant="h4" gutterBottom sx={{ color: "#A3FF12" }}>
                    {dateTimeString}
                </Typography>
            </Stack>
        </Box>
  )
}

export default App
