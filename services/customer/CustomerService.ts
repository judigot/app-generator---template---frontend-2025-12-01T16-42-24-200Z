import { axiosInstance } from '@/vendor/axiosInstance.ts';
import { Customer } from '@/interfaces/ICustomer.ts';

/**
 * Chunk records for processing
 */
export const chunk = async (data, chunkSize = 100): Promise<unknown> => {
  try {
    const response = await axiosInstance.post(`customers/chunk`, {
      data,
      chunkSize,
    });
    return response.data;
  } catch (error) {
    console.error('Error in chunk operation:', error);
    throw error;
  }
};

/**
 * Process each record individually
 */
export const each = async (callback): Promise<unknown> => {
  try {
    const response = await axiosInstance.post(`customers/each`, {
      callback: callback.toString(),
    });
    return response.data;
  } catch (error) {
    console.error('Error in each operation:', error);
    throw error;
  }
};

/**
 * Find or create a record
 */
export const firstOrCreate = async (
  searchCriteria,
  values = {},
): Promise<unknown> => {
  try {
    const response = await axiosInstance.post(`customers/first-or-create`, {
      searchCriteria,
      values,
    });
    return response.data;
  } catch (error) {
    console.error('Error in first or create operation:', error);
    throw error;
  }
};

/**
 * Find or return a new record instance
 */
export const firstOrNew = async (
  data,
  callback,
  chunkSize = 100,
): Promise<unknown> => {
  try {
    const response = await axiosInstance.post(`customers/first-or-new`, {
      data,
      callback: callback?.toString(),
      chunkSize,
    });
    return response.data;
  } catch (error) {
    console.error('Error in first or new operation:', error);
    throw error;
  }
};

/**
 * Retrieve related models
 */
export const getWithRelations = async (relations = []): Promise<unknown> => {
  try {
    const response = await axiosInstance.get(`customers/get-with-relations`, {
      params: { relations },
    });
    return response.data;
  } catch (error) {
    console.error('Error in get with relations operation:', error);
    throw error;
  }
};

/**
 * Retrieve a list of specific column values
 */
export const pluck = async (column, key = null): Promise<unknown> => {
  try {
    const response = await axiosInstance.get(`customers/pluck`, {
      params: { column, key },
    });
    return response.data;
  } catch (error) {
    console.error('Error in pluck operation:', error);
    throw error;
  }
};

/**
 * Filter records between two values
 */
export const whereBetween = async (column, min, max): Promise<unknown> => {
  try {
    const response = await axiosInstance.post(`customers/where-between`, {
      column,
      min,
      max,
    });
    return response.data;
  } catch (error) {
    console.error('Error in where between operation:', error);
    throw error;
  }
};

/**
 * Filter records based on a set of values
 */
export const whereIn = async (column, values): Promise<unknown> => {
  try {
    const response = await axiosInstance.post(`customers/where-in`, {
      column,
      values,
    });
    return response.data;
  } catch (error) {
    console.error('Error in where in operation:', error);
    throw error;
  }
};

/**
 * Filter records excluding a set of values
 */
export const whereNotIn = async (column, values): Promise<unknown> => {
  try {
    const response = await axiosInstance.post(`customers/where-not-in`, {
      column,
      values,
    });
    return response.data;
  } catch (error) {
    console.error('Error in where not in operation:', error);
    throw error;
  }
};

/**
 * Create multiple records in a transaction with rollback support
 */
export const batchCreateWithTransaction = async (data, options) => {
  try {
    return axiosInstance.post('/customers/batch-create', {
      dataArray: data,
      options: options,
    });
  } catch (error) {
    console.error('Error in batch create with transaction  operation:', error);
    throw error;
  }
};

/**
 * Batch update multiple records
 */
export const batchUpdate = async (records): Promise<unknown> => {
  try {
    const response = await axiosInstance.post(`customers/batch-update`, {
      records,
    });
    return response.data;
  } catch (error) {
    console.error('Error in batch update operation:', error);
    throw error;
  }
};

/**
 * Create or update a record
 */
export const updateOrCreate = async (records): Promise<unknown> => {
  try {
    const response = await axiosInstance.post(`customers/update-or-create`, {
      records,
    });
    return response.data;
  } catch (error) {
    console.error('Error in update or create operation:', error);
    throw error;
  }
};

/**
 * Create a new record
 */
export const create = async (data): Promise<unknown> => {
  try {
    const response = await axiosInstance.post(`customers`, data);
    return response.data;
  } catch (error) {
    console.error('Error in create operation:', error);
    throw error;
  }
};

/**
 * Delete a specific record by ID
 */
export const destroy = async (id): Promise<unknown> => {
  try {
    const response = await axiosInstance.delete(`customers/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error in destroy operation:', error);
    throw error;
  }
};

/**
 * Find a specific record by ID
 */
export const findById = async (id): Promise<unknown> => {
  try {
    const response = await axiosInstance.get(`customers/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error in find by id operation:', error);
    throw error;
  }
};

/**
 * Get all records
 */
export const index = async (params = {}): Promise<unknown> => {
  try {
    const response = await axiosInstance.get(`customers`, { params });
    return response.data;
  } catch (error) {
    console.error('Error in index operation:', error);
    throw error;
  }
};

/**
 * Update a specific record by ID
 */
export const update = async (id, data): Promise<unknown> => {
  try {
    const response = await axiosInstance.put(`customers/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error in update operation:', error);
    throw error;
  }
};

/**
 * Count records by criteria
 */
export const count = async (data = {}): Promise<unknown> => {
  try {
    const response = await axiosInstance.get(`customers/count`, {
      params: { criteria: data },
    });
    return response.data;
  } catch (error) {
    console.error('Error in count operation:', error);
    throw error;
  }
};

/**
 * Check if a record exists
 */
export const exists = async (params): Promise<unknown> => {
  try {
    const response = await axiosInstance.get(`customers/exists`, { params });
    return response.data;
  } catch (error) {
    console.error('Error in exists operation:', error);
    throw error;
  }
};

/**
 * Find a record by specific attributes
 */
export const findByAttributes = async (attributes): Promise<unknown> => {
  try {
    const response = await axiosInstance.post(`customers/find-by-attributes`, {
      attributes,
    });
    return response.data;
  } catch (error) {
    console.error('Error in find by attributes operation:', error);
    throw error;
  }
};

/**
 * Paginate records
 */
export const paginate = async (
  page = 1,
  perPage = 15,
  criteria = {},
): Promise<unknown> => {
  try {
    const response = await axiosInstance.get(`customers/paginate`, {
      params: { page, perPage, criteria },
    });
    return response.data;
  } catch (error) {
    console.error('Error in paginate operation:', error);
    throw error;
  }
};

/**
 * Search records
 */
export const search = async (query, options = {}): Promise<unknown> => {
  try {
    const response = await axiosInstance.get(`customers/search`, {
      params: { query, options },
    });
    return response.data;
  } catch (error) {
    console.error('Error in search operation:', error);
    throw error;
  }
};

/**
 * Find multiple records by their IDs
 */
export const findMany = async (ids): Promise<unknown> => {
  try {
    const response = await axiosInstance.post(`customers/find-many`, {
      ids,
    });
    return response.data;
  } catch (error) {
    console.error('Error in find many operation:', error);
    throw error;
  }
};

/**
 * Find a record or throw an exception if not found
 */
export const findOrFail = async (id): Promise<unknown> => {
  try {
    const response = await axiosInstance.get(`customers/find-or-fail/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error in find or fail operation:', error);
    throw error;
  }
};

/**
 * Group records by a specific column
 */
export const groupBy = async (column): Promise<unknown> => {
  try {
    const response = await axiosInstance.get(`customers/group-by`, {
      params: { column },
    });
    return response.data;
  } catch (error) {
    console.error('Error in group by operation:', error);
    throw error;
  }
};

/**
 * Retrieve the latest record based on a column
 */
export const latest = async (column, limit = 1): Promise<unknown> => {
  try {
    const response = await axiosInstance.get(`customers/latest`, {
      params: { column, limit },
    });
    return response.data;
  } catch (error) {
    console.error('Error in latest operation:', error);
    throw error;
  }
};

/**
 * Retrieve the oldest record based on a column
 */
export const oldest = async (column, limit = 1): Promise<unknown> => {
  try {
    const response = await axiosInstance.get(`customers/oldest`, {
      params: { column, limit },
    });
    return response.data;
  } catch (error) {
    console.error('Error in oldest operation:', error);
    throw error;
  }
};

/**
 * Order records by a specific column and direction
 */
export const orderBy = async (column, direction = 'asc'): Promise<unknown> => {
  try {
    const response = await axiosInstance.get(`customers/order-by`, {
      params: { column, direction },
    });
    return response.data;
  } catch (error) {
    console.error('Error in order by operation:', error);
    throw error;
  }
};

/**
 * Retrieve random records
 */
export const random = async (limit = 1): Promise<unknown> => {
  try {
    const response = await axiosInstance.get(`customers/random`, {
      params: { limit },
    });
    return response.data;
  } catch (error) {
    console.error('Error in random operation:', error);
    throw error;
  }
};

/**
 * Retrieve only soft-deleted records
 */
export const onlyTrashed = async (): Promise<unknown> => {
  try {
    const response = await axiosInstance.get(`customers/only-trashed`);
    return response.data;
  } catch (error) {
    console.error('Error in only trashed operation:', error);
    throw error;
  }
};

/**
 * Restore a soft-deleted record by ID
 */
export const restore = async (id): Promise<unknown> => {
  try {
    const response = await axiosInstance.post(`customers/${id}/restore`);
    return response.data;
  } catch (error) {
    console.error('Error in restore operation:', error);
    throw error;
  }
};

/**
 * Soft delete a specific record by ID
 */
export const softDelete = async (id): Promise<unknown> => {
  try {
    const response = await axiosInstance.delete(`customers/${id}/soft`);
    return response.data;
  } catch (error) {
    console.error('Error in soft delete operation:', error);
    throw error;
  }
};

/**
 * Retrieve records excluding soft-deleted ones
 */
export const withoutTrashed = async (): Promise<unknown> => {
  try {
    const response = await axiosInstance.get(`customers/without-trashed`);
    return response.data;
  } catch (error) {
    console.error('Error in without trashed operation:', error);
    throw error;
  }
};

/**
 * Retrieve all records including soft-deleted ones
 */
export const withTrashed = async (): Promise<unknown> => {
  try {
    const response = await axiosInstance.get(`customers/with-trashed`);
    return response.data;
  } catch (error) {
    console.error('Error in with trashed operation:', error);
    throw error;
  }
};