import { Module } from '@nestjs/common';
import { RatingController } from './controller/rating.controller';
import { RatingService } from './service/rating.service';
import { RatingRepository } from './repository/google_rating.repository';

@Module({
    controllers: [RatingController],
    providers: [RatingService, RatingRepository],
    exports: [RatingRepository],
})
export class RatingModule {}
