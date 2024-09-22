import {
    IsString,
    IsArray,
    ArrayMinSize,
    IsNumber,
  } from 'class-validator';
    
  export class OrderSchema {
    @IsArray()
    @IsString({ each: true })
    @ArrayMinSize(1)
    items: string;
    
    @IsNumber()
    totalPrice: number;

    @IsString()
    restaurantId: string;
  
  }