import { db } from './db-connection';
import {
  pageComponents,
  components,
  pages,
  users,
  organizations,
} from './schema';
import readline from 'readline';

async function confirmAction(message: string): Promise<boolean> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(`${message} (y/N): `, (answer) => {
      rl.close();
      resolve(answer.toLowerCase() === 'y');
    });
  });
}

async function pruneDatabase() {
  console.log('⚠️  WARNING: This will delete ALL data from your database! ⚠️');
  console.log(
    'Tables affected: page_components, components, pages, users, organizations',
  );

  const confirmed = await confirmAction('Are you sure you want to continue?');

  if (!confirmed) {
    console.log('Database pruning cancelled.');
    return;
  }

  console.log('Starting database pruning process...');

  try {
    // Delete all records in reverse order of dependencies
    console.log('Deleting records from page_components table...');
    await db.delete(pageComponents);

    console.log('Deleting records from components table...');
    await db.delete(components);

    console.log('Deleting records from pages table...');
    await db.delete(pages);

    console.log('Deleting records from users table...');
    await db.delete(users);

    console.log('Deleting records from organizations table...');
    await db.delete(organizations);

    console.log('✅ Database pruning completed successfully');
  } catch (error) {
    console.error('❌ Error pruning database:', error);
    throw error;
  }
}

pruneDatabase()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error('Failed to prune database:', error);
    process.exit(1);
  });
