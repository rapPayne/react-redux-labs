// testFormAction.ts
export async function submitData(formData: FormData) {
  'use server';
  console.log({ formData });
  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
  const data = Object.fromEntries(formData);
  // Process data on the server
  console.log(data);
  return { success: true };
}

