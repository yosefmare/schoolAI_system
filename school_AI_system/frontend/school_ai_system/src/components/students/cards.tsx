"use client";

import * as React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box } from "@mui/material";

type StudentCardProps = {
  visible: boolean;
  name: string;
  image: string;
};

export default function StudentCard({ visible, name, image }: StudentCardProps) {
  if (!visible) return null;

  return (
    <Card sx={{ maxWidth: 345, m: 2, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <CardMedia
        sx={{ height: 180 }}
        image={image}
        title={name}
      />
      <CardContent>
        <Typography variant="h6" component="div" textAlign="center" sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}>
          {name}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-around", flexWrap: "wrap", gap: 1 }}>
        <Button variant="contained" size="small" color="primary" sx={{ flexGrow: 1 }}>
          Edit
        </Button>
        <Button variant="outlined" size="small" color="secondary" sx={{ flexGrow: 1 }}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
