//
//  AssetsPicker.h
//  RNFilePicker
//
//  Created by KenestoDev on 08/02/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTViewManager.h>
#import "FPPicker.h"
#import <UIKit/UIKit.h>


@interface AssetsPicker : NSObject <RCTBridgeModule,FPPickerControllerDelegate>
//@property (nonatomic, weak) IBOutlet UIImageView *imageView;
@property FPPickerController* pickerController;

@end


