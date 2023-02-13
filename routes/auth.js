/*
    Rutas de Uusuarios / Auth
    host + /api/auth
*/

// const express = require("express"); lo de abajo es lo mismo hace destructiring
const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.json({
    ok: true,
  });
});

module.exports = router;
