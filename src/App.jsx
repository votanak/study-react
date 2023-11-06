import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { NaviBar } from "./components/Navibar";
import { Home } from "./Home";
import { Users } from "./Users";
import { About } from "./About";
import { Routes, Route, Router } from "react-router-dom";

const Styles = styled.div``;

export const App = () => {
  return (
    <>
      <NaviBar />
      <Routes>
        <Route exact path="/" element={Home} />
        <Route path="/users" element={Users} />
        <Route path="/about" element={About} />
      </Routes>
    </>
  );
};
