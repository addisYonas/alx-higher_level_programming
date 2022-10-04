#!/usr/bin/node
const Args = process.argv.length - 2;
if (Args === 0) {
  console.log('No argument');
} else {
  console.log('Arguments found');
}
