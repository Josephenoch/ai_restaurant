import {
  IsString,
  IsOptional,
} from 'class-validator';
  
export class RestaurantSchema {
  @IsString()
  name: string;
  
  @IsString()
  @IsOptional()
  michellinRating: string;

}