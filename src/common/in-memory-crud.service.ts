import { NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';

// Almacenamiento temporal en memoria. Reemplazar por TypeORM/Prisma/Mongoose despues.
export class InMemoryCrudService<T extends { id: string }, C, U> {
  protected items: T[] = [];

  create(dto: C): T {
    const item = { id: randomUUID(), estado: true, ...dto } as unknown as T;
    this.items.push(item);
    return item;
  }

  findAll(): T[] {
    return this.items;
  }

  findOne(id: string): T {
    const item = this.items.find((i) => i.id === id);
    if (!item) throw new NotFoundException(`Registro ${id} no encontrado`);
    return item;
  }

  update(id: string, dto: U): T {
    const item = this.findOne(id);
    return Object.assign(item, dto);
  }

  remove(id: string): void {
    this.findOne(id);
    this.items = this.items.filter((i) => i.id !== id);
  }
}
