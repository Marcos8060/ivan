"use client";
import React, { useEffect } from "react";
import ButtonComponent from "@/Components/SharedComponents/ButtonComponent";
import CustomizedTickBoxComponent from "@/Components/SharedComponents/CustomizedTickBoxComponent";
import { useDispatch } from "react-redux";
import {
  nextStep,
  setCurrentStep,
  previousStep,
} from "@/redux/features/stepper";
import CustomizedBackButton from "@/Components/SharedComponents/CustomizedBackComponent";

const CampaignGoal = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentStep(16));
  }, [dispatch]);
  return (
    <section className="flex items-center justify-center h-screen w-4/12 mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-center my-2">Campaign Goal</h1>
        <p className="text-center text-sm mb-3">
          On Influencer platform, there are three types of collaborations with
          creators. While we will primarily focus on the options you select
          below, you will also have additional opportunities to explore and
          experiment with.
        </p>
        <div className="space-y-4">
          <CustomizedTickBoxComponent
            label="Gifted"
            description="A gifted collaboration involves an influencer creating and sharing content about your brand in return for receiving a gifted product, with no financial payment involved."
          />
          <CustomizedTickBoxComponent
            label="Afilliate"
            description="the influencer earns a commission for each sale they drive to your brand. This commission can either be a percentage of the sale, typically ranging from 10% to 25%, or a fixed amount agreed upon by the brand and the influencer."
          />
          <CustomizedTickBoxComponent
            label="Paid"
            description="The influencer receives a fixed fee along with a product. This arrangement often appeals to influencers with larger audiences, higher engagement rates, premium-quality content, and the option for brands to review content before it is published"
          />
          <ButtonComponent onClick={() => dispatch(nextStep())} label="Next" />
          <CustomizedBackButton onClick={() => dispatch(previousStep())} />
        </div>
      </div>
    </section>
  );
};

export default CampaignGoal;
