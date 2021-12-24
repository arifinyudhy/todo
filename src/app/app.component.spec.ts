import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'unit-test-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('unit-test-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('unit-test-app app is running!');
  });
});

describe("service", () => {
  let service: AppComponent;
  beforeEach(() => {
    service = new AppComponent();
  });
  it("should add the title", () => {
    const title = "This is my first post";
    service.addTitle(title);
    let length = service.titles.length;
    expect(service.titles.length).toBeGreaterThanOrEqual(1);
    expect(service.titles[length - 1]).toEqual(title);
  });
  it("should truncate list of title", () => {
    service.truncateTitle();
    expect(service.titles.length).toEqual(0);
  })
});
