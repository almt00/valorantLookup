import React from "react";
import { useParams } from "react-router-dom";

export default function AgentDetail() {
  const { id } = useParams();
  return <div>AgentDetail {id}</div>;
}
