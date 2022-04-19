import {TestBed} from "@angular/core/testing";
import {AppModule} from "./app.module";
import {APP_BASE_HREF} from "@angular/common";


describe('AppModule', () => {
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[AppModule],
      providers:[{provide:APP_BASE_HREF,useValue:'/'}]
    });
  });

  it('should be initialize App Module', function () {
    const appModule = TestBed.inject(AppModule);
    expect(appModule).toBeTruthy();
  });
});
