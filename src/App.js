import React from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import Input from "./components/Input";

export default function App() {
  return (
    <div>
      <Header />
      <Input />
      <Note />
      <Footer />
    </div>
  );
}
