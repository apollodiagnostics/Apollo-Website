import { Controller, Get, Param, Query } from '@nestjs/common';
import { Response as ResponseCustom } from '../../../utils/response/response.decorator';
import { TestDTO } from '../dto/test.dto';
import { TestService } from '../service/test.service';
import { responseName } from 'src/constants/response';

@Controller()
export class TestController {
    constructor(private readonly testService: TestService) {}

    @Get('/:id')
    @ResponseCustom(responseName.GET_TEST_BY_ID)
    async getTestById(@Param() param: TestDTO) {
        return await this.testService.getAllTestsById(param.id);
    }

    @Get()
    @ResponseCustom(responseName.GET_ALL_TESTS)
    async getAllTestDetails(@Query() test: TestDTO) {
        return await this.testService.getAllTests(test);
    }
}
