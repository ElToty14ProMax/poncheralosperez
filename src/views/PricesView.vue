<template>
    <div class="prices-view bg-dark text-white py-5">
      <div class="container">
        <h1 class="text-center mb-5 text-warning">Catálogo de Precios</h1>
  
        <div class="row">
          <!-- Columna 1: Rines Urbanos -->
          <div class="col-lg-6 col-md-12 mb-4">
            <h4 class="text-warning text-center mb-3">Rines Urbanos</h4>
            <div class="table-responsive">
              <table class="table table-bordered table-dark table-striped text-center price-table">
                <thead>
                  <tr>
                    <th>Rin</th>
                    <th>R12-R15</th>
                    <th>R16-R18</th>
                    <th>R19-R20</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="service-name">Montado y Desmontado (USD)</td>
                    <td>0.30 USD</td>
                    <td>0.60 USD</td>
                    <td>1.00 USD</td>
                  </tr>
                  <tr>
                    <td class="service-name">Servicio de Patio (USD)</td>
                    <td>0.25 USD</td>
                    <td>0.50 USD</td>
                    <td>0.90 USD</td>
                  </tr>
                  <tr>
                    <td class="service-name">Diagnóstico de Ruedas (Balanceo) (USD)</td>
                    <td>0.50 USD</td>
                    <td>0.80 USD</td>
                    <td>1.25 USD</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
  
          <!-- Columna 2: Rines de Carga -->
          <div class="col-lg-6 col-md-12 mb-4">
            <h4 class="text-warning text-center mb-3">Rines de Carga</h4>
            <div class="table-responsive">
              <table class="table table-bordered table-dark table-striped text-center price-table">
                <thead>
                  <tr>
                    <th>Rin</th>
                    <th>R12C-R15C</th>
                    <th>R16C-R18C</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="service-name">Montado y Desmontado (USD)</td>
                    <td>0.50 USD</td>
                    <td>1.00 USD</td>
                  </tr>
                  <tr>
                    <td class="service-name">Servicio de Patio (USD)</td>
                    <td>0.30 USD</td>
                    <td>0.70 USD</td>
                  </tr>
                  <tr>
                    <td class="service-name">Diagnóstico de Ruedas (Balanceo) (USD)</td>
                    <td>0.75 USD</td>
                    <td>1.00 USD</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
  
          <!-- Columna 3: Rines All Terrain A/T -->
          <div class="col-lg-6 col-md-12 mb-4">
            <h4 class="text-warning text-center mb-3">Rines All Terrain A/T</h4>
            <div class="table-responsive">
              <table class="table table-bordered table-dark table-striped text-center price-table">
                <thead>
                  <tr>
                    <th>Rin</th>
                    <th>R17A/T-R18A/T</th>
                    <th>R19A/T-R20A/T</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="service-name">Montado y Desmontado (USD)</td>
                    <td>1.00 USD</td>
                    <td>1.50 USD</td>
                  </tr>
                  <tr>
                    <td class="service-name">Servicio de Patio (USD)</td>
                    <td>0.50 USD</td>
                    <td>1.00 USD</td>
                  </tr>
                  <tr>
                    <td class="service-name">Diagnóstico de Ruedas (Balanceo) (USD)</td>
                    <td>1.20 USD</td>
                    <td>1.50 USD</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
  
          <!-- Columna 4: Rines Especiales -->
          <div class="col-lg-6 col-md-12 mb-4">
            <h4 class="text-warning text-center mb-3">Rines Especiales</h4>
            <div class="table-responsive">
              <table class="table table-bordered table-dark table-striped text-center price-table">
                <thead>
                  <tr>
                    <th>Rin</th>
                    <th>R21-R24</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="service-name">Montado y Desmontado (USD)</td>
                    <td>2.00 USD</td>
                  </tr>
                  <tr>
                    <td class="service-name">Servicio de Patio (USD)</td>
                    <td>1.50 USD</td>
                  </tr>
                  <tr>
                    <td class="service-name">Diagnóstico de Ruedas (Balanceo) (USD)</td>
                    <td>2.50 USD</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
  
        <!-- Trabajos Aplicados -->
        <h3 class="text-center text-warning mt-5 mb-4">Trabajos Aplicados</h3>
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="table-responsive mb-4">
              <table class="table table-bordered table-dark table-striped text-center text-white price-table">
                <thead>
                  <tr>
                    <th>Trabajo aplicado</th>
                    <th>Precio Unitario (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Remasado</td>
                    <td>0.50 USD</td>
                  </tr>
                  <tr>
                    <td>Parche Steelman</td>
                    <td>2 USD</td>
                  </tr>
                  <tr>
                    <td>Parche Radial</td>
                    <td>1 USD</td>
                  </tr>
                  <tr>
                    <td>Parche reforzado 100mm</td>
                    <td>3 USD</td>
                  </tr>
                  <tr>
                    <td>Parche reforzado 115mm</td>
                    <td>5 USD</td>
                  </tr>
                  <tr>
                    <td>Parche reforzado Traktor</td>
                    <td>7 USD</td>
                  </tr>
                  <tr>
                    <td>Parche reforzado Cuadrado</td>
                    <td>8 USD</td>
                  </tr>
                  <tr>
                    <td>Válvula Estándar</td>
                    <td>1.10 USD</td>
                  </tr>
                  <tr>
                    <td>Válvula para sensores</td>
                    <td>4 USD</td>
                  </tr>
                  <tr>
                    <td>Sustitución de Sensores</td>
                    <td>1.50 USD</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </template>
  
  <script setup>
  // No specific script logic needed
  </script>
  
  <style scoped>
  .prices-view {
    min-height: 100vh;
    background-color: #000 !important;
    color: white;
    padding: 80px 20px;
  }
  
  .text-warning {
    color: #ff8c00 !important;
  }
  
  .table {
    background-color: #333;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .table thead th {
    background-color: #ff8c00;
    color: #000;
    border-color: #ff8c00;
    font-weight: bold;
  }
  
  .table-bordered {
    border-color: #ff8c00 !important;
  }
  
  .table-dark th,
  .table-dark td {
    border-color: #ff8c00 !important;
    font-size: 0.85rem;
  }
  
  .service-name {
    background-color: #3a3a3a !important;
    font-weight: bold;
    text-align: left !important;
    padding-left: 10px !important;
  }
  
  .price-table th,
  .price-table td {
    vertical-align: middle;
  }
  
  @media (max-width: 767.98px) {
    .table-responsive {
      border: 1px solid #ff8c00;
      border-radius: 8px;
    }
  
    .price-table thead {
      display: none;
    }
  
    .price-table tbody,
    .price-table tr,
    .price-table td {
      display: block;
      width: 100%;
    }
  
    .price-table tr {
      margin-bottom: 1rem;
      border: 1px solid #ff8c00;
      border-radius: 8px;
      padding: 0.5rem;
    }
  
    .price-table td {
      text-align: right;
      padding-left: 50%;
      position: relative;
    }
  
    .price-table td::before {
      content: attr(data-label);
      position: absolute;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
      text-align: left;
      font-weight: bold;
      color: #ff8c00;
    }
  
    .col-lg-6 {
      margin-bottom: 2rem;
    }
    
    .table-dark th,
    .table-dark td {
      font-size: 0.75rem;
      padding: 8px 4px;
    }
  }
  </style>