import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { Animation, Season } from '../shared/animation.model';
import { AnimationService } from '../shared/animation.service';

@Component({
    selector: 'app-animation-new',
    templateUrl: './animation-new.component.html',
    styleUrls: ['./animation-new.component.css']
})
export class AnimationNewComponent implements OnInit {
    animation: any;
    animationForm: FormGroup;

    constructor(private fb: FormBuilder,
                private animationService: AnimationService) {
        this.createNewAnimationForm();
    }

    ngOnInit() {
    }

    createNewAnimationForm() {
        this.animationForm = this.fb.group({
            name: ['', Validators.required],
            cover: ['', Validators.required],
            description: ['', Validators.required],
            tags: this.fb.array([]), // TODO: 一个 str list
            seasons: this.fb.array([]) // TODO: 一个 Season list
        });
    }

    get tags(): FormArray {
        return this.animationForm.get('tags') as FormArray; // TODO: why `as` needed ?
    }

    get seasons(): FormArray {
        return this.animationForm.get('seasons') as FormArray;
    }

    addTag() {
        this.tags.push(this.fb.control('', Validators.required));
    }

    addSeason() {
        let newSeason = new Season();
        newSeason.index = this.seasons.length + 1; // index 递增

        let newSeasonFC = {};
        for(let [key, value] of Object.entries(newSeason)){
            newSeasonFC[key] = this.fb.control(value, Validators.required);
        }

        this.seasons.push(this.fb.group(newSeasonFC));

        console.log('[test] newSeason : ', newSeason); // TODO test to del
        console.log('[test] newSeasonFC : ', newSeasonFC); // TODO test to del
    }

    prepareSaveAnimation() {
        const formModel = this.animationForm.value;

        const saveAnimation = {
            name: formModel.name as string,
            cover: formModel.cover as string,
            description: formModel.description as string,
            tags: formModel.tags as string[],
            seasons: formModel.seasons as Season[]
        };
        // TODO: 这个方法中生成的数据并不包含 id ，那如何传给 add 呢？
        // TODO  目前使用 as 语法，好像可以避免，为啥？？？

        return saveAnimation;
    }

    onSubmit() {
        this.animation = this.prepareSaveAnimation();
        this.animationService.addAnimation(this.animation as Animation).subscribe();
        /* maybe redirect here.. */
    }
}
