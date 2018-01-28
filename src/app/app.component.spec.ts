import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DataTableComponent } from './DataTable/datatable.component';
import { TableData } from './MOCK_DATA';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DataTableComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
      ],
      providers: [ ]
    });
    TestBed.compileComponents();
  });
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Westpac app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Westpac app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Westpac app!');
  }));
  it('Test Fetch First Page', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();

    var objItem= [{"first_name":"Thorsten","last_name":"Say","email":"tsay0@woothemes.com","gender":"Male","ip":"175.40.208.98"},
      {"first_name":"Zacharias","last_name":"Edser","email":"zedser1@spotify.com","gender":"Male","ip":"134.35.71.240"},
      {"first_name":"Lorry","last_name":"Swane","email":"lswane2@webmd.com","gender":"Male","ip":"70.74.21.161"},
      {"first_name":"Adelice","last_name":"Copestick","email":"acopestick3@google.ru","gender":"Female","ip":"28.205.198.101"},
      {"first_name":"Binnie","last_name":"Veillard","email":"bveillard4@ihg.com","gender":"Female","ip":"89.91.174.63"},
      {"first_name":"Derk","last_name":"Massow","email":"dmassow5@blogtalkradio.com","gender":"Male","ip":"204.237.210.235"},
      {"first_name":"Florette","last_name":"Solan","email":"fsolan6@disqus.com","gender":"Female","ip":"186.217.87.142"},
      {"first_name":"Kelli","last_name":"Pudding","email":"kpudding7@nps.gov","gender":"Female","ip":"165.235.195.72"},
      {"first_name":"Rafael","last_name":"O' Finan","email":"rofinan8@ucsd.edu","gender":"Male","ip":"173.27.77.108"},
      {"first_name":"Lynnet","last_name":"Castanaga","email":"lcastanaga9@biblegateway.com","gender":"Female","ip":"139.213.153.87"}];

    expect(app.changePage(app.firstPage)).toEqual(objItem);
  }));
  it('Test Fetch Last Page', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();

    var objItem= [{"first_name":"Wendie","last_name":"Barks","email":"wbarksri@eepurl.com","gender":"Female","ip":"40.179.237.160"},
      {"first_name":"Ambrose","last_name":"Cosslett","email":"acosslettrj@marketwatch.com","gender":"Male","ip":"160.78.186.218"},
      {"first_name":"Linnet","last_name":"Malzard","email":"lmalzardrk@berkeley.edu","gender":"Female","ip":"156.17.247.92"},
      {"first_name":"Barney","last_name":"Kissell","email":"bkissellrl@wikispaces.com","gender":"Male","ip":"115.76.222.236"},
      {"first_name":"Ivor","last_name":"O'Roan","email":"ioroanrm@businessinsider.com","gender":"Male","ip":"183.219.88.40"},
      {"first_name":"Derrick","last_name":"Assaf","email":"dassafrn@businessinsider.com","gender":"Male","ip":"213.67.78.251"},
      {"first_name":"Lee","last_name":"Chattaway","email":"lchattawayro@smh.com.au","gender":"Female","ip":"168.77.117.19"},
      {"first_name":"Ebeneser","last_name":"Skoughman","email":"eskoughmanrp@last.fm","gender":"Male","ip":"91.122.26.95"},
      {"first_name":"Laryssa","last_name":"Jordanson","email":"ljordansonrq@about.com","gender":"Female","ip":"16.37.136.139"},
      {"first_name":"Tierney","last_name":"Hudspith","email":"thudspithrr@dropbox.com","gender":"Female","ip":"252.151.103.207"}];

    expect(app.changePage((TableData.length / app.itemsPerPage))).toEqual(objItem);
  }));

  it('Test Row Height', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();

    expect(app.rowheight).toEqual('20px');
  }));
});
