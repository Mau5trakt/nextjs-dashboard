import postgres from 'postgres';


const sql = postgres(process.env.POSTGRES_URL!, { 
  ssl: 'require',
  connect_timeout: 30 
});

async function listInvoices() {
  // En la librería 'postgres', las consultas usan tagged templates
  const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666
  `;

  return data;
}

export async function GET() {
  try {
    const invoices = await listInvoices();

    
    if (invoices.length === 0) {
      return Response.json({ message: "No se encontraron facturas con ese monto." });
    }

    return Response.json(invoices);
  } catch (error: any) {
    
    console.error('Error en la base de datos:', error);
    
    return Response.json(
      { 
        error: "Error al conectar con Postgres", 
        details: error.message,
        code: error.code 
      }, 
      { status: 500 }
    );
  }
}