/**
 * Created by cristianolaya on 30/07/17.
 */
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../localization/imports';

@Component({
  selector: 'footer',
  templateUrl: './footer.template.html',
  styles: [ require('./footer.component.less') ],
})
export class FooterComponent implements OnInit {
  public translatedText: string;
  public supportedLangs: any[];

  constructor(private _translate: TranslateService) { }

  ngOnInit() {
    // standing data
    this.supportedLangs = [
      { display: 'English', value: 'en' },
      { display: 'Español', value: 'es' },
    ];

    this.subscribeToLangChanged();

    // set language
    this._translate.setDefaultLang('en'); // set English as default
    this._translate.enableFallback(true); // enable fallback

    // set current language
    this.selectLang('es');
  }

  isCurrentLang(lang: string) {
    // check if the selected lang is current lang
    return lang === this._translate.currentLang;
  }

  selectLang(lang: string) {
    // set current lang;
    this._translate.use(lang);
  }

  subscribeToLangChanged() {
    // refresh text
    // please unsubribe during destroy
    return this._translate.onLangChanged.subscribe(x => this.refreshText());
  }

  refreshText() {
    // refresh translation when language change
    this.translatedText = this._translate.instant('hello world');
  }
}
