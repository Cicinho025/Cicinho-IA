import { useState, useEffect, useRef } from "react";

const TABS = ["💬 Chat","📰 Novidades","⏱️ Timer","📊 Relatórios","📅 Agenda","🔗 Apps","🧬 Aprimoramento","📦 Cubagem","🗺️ Rotas","📡 Rastreador","🔧 Manutenção","📋 Importar","📱 Inventário"];

const VEICULOS = [
  {id:"fiorino", nome:"Fiat Fiorino",       tipo:"Utilitário", emoji:"🚐",comp:1.55,larg:1.22,alt:1.22,volume:2.3,  pesoMax:650,  consumo:10.5,cor:"#f97316",restUrbana:"Sem restrição urbana"},
  {id:"sprinter",nome:"Sprinter / Master",   tipo:"VUC Van",    emoji:"🚐",comp:3.65,larg:1.76,alt:1.80,volume:11.5, pesoMax:1500, consumo:9.0, cor:"#3b82f6",restUrbana:"VUC — máx 6,3m"},
  {id:"hr",      nome:"Hyundai HR / Bongo",  tipo:"VUC Baú",    emoji:"🚛",comp:3.0, larg:1.70,alt:1.80,volume:9.2,  pesoMax:1300, consumo:9.5, cor:"#8b5cf6",restUrbana:"VUC — áreas restritas"},
  {id:"vuc34",   nome:"Caminhão ¾ VUC",      tipo:"VUC Pesado", emoji:"🚛",comp:5.0, larg:2.10,alt:2.20,volume:23.0, pesoMax:3000, consumo:8.0, cor:"#22c5
