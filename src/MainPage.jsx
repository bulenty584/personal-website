import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

function MainPage() {
  return (
    <div>
      <h1>Main Page</h1>
      <NavLink to="/">Home</NavLink>
    </div>
  );
}

export default MainPage;
