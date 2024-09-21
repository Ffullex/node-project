import { RouteError } from '@src/common/classes';
import HttpStatusCodes from '@src/common/HttpStatusCodes';

import ExampleRepo from '@src/repos/ExampleRepo';
import { ExampleType } from '@src/models/Example';


// **** Variables **** //

export const EXAMPLE_NOT_FOUND_ERR = 'Example not found';


// **** Functions **** //

/**
 * Get all Examples.
 */
function getAll(): Promise<ExampleType[]> {
    return ExampleRepo.getAll();
}

/**
 * Add one Example.
 */
function addOne(example: ExampleType): Promise<void> {
  return ExampleRepo.add(example);
}

/**
 * Update one Example.
 */
async function updateOne(example: ExampleType): Promise<void> {
  const persists = await ExampleRepo.persists(example.id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      EXAMPLE_NOT_FOUND_ERR,
    );
  }
  // Return Example
  return ExampleRepo.update(example);
}

/**
 * Delete a Example by their id.
 */
async function _delete(id: number): Promise<void> {
  const persists = await ExampleRepo.persists(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      EXAMPLE_NOT_FOUND_ERR,
    );
  }
  // Delete Example
  return ExampleRepo.delete(id);
}


// **** Export default **** //

export default {
  getAll,
  addOne,
  updateOne,
  delete: _delete,
} as const;
